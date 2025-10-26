<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Booking;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $user = $request->validateCredentials();

        if (Features::enabled(Features::twoFactorAuthentication()) && $user->hasEnabledTwoFactorAuthentication()) {
            $request->session()->put([
                'login.id' => $user->getKey(),
                'login.remember' => $request->boolean('remember'),
            ]);

            return to_route('two-factor.login');
        }

        Auth::login($user, $request->boolean('remember'));

        $request->session()->regenerate();

        return redirect()->intended(route('home', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function profile()
    {
        $user = Auth::user();

        $bookings = Booking::with(['car.brand', 'car.category'])
            ->where('user_id', $user->id)
            ->latest()
            ->get();
        return Inertia::render('auth/Profile', [
            'user' => $user,
            'bookings' => $bookings,
        ]);
    }

    public function edit()
    {
        $user = Auth::user();

        return Inertia::render('auth/EditProfile', [
            'user' => $user
        ]);
    }

    public function update(Request $request, User $user)
    {
        $formFields = $request->validate([
            'name' => ['nullable', 'min:3'],
            'email' => [
                'nullable',
                'email',
                Rule::unique('users', 'email')->ignore($user->id),
            ],
            'password' => ['nullable', 'min:6', 'confirmed'],
            // 'admin' => ['boolean'],
        ]);

        if (!empty($formFields['password'])) {
            $formFields['password'] = Hash::make($formFields['password']);
        } else {
            unset($formFields['password']);
        }

        // Only update fields that are not null
        $formFields = array_filter($formFields, fn($value) => !is_null($value));

        // Ensure admin is always set
        // $formFields['admin'] = $request->has('admin');

        $user->update($formFields);

        return redirect('/profile')->with('success', 'User updated successfully');
    }

}
