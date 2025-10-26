<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Booking;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Register
    public function create()
    {
        return Inertia::render('auth/Register');
    }
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'phone' => ['required', 'string', 'regex:/^\+?[0-9\s\-]{7,20}$/'],
            'password' => ['required', 'min:6', 'confirmed'],
            'admin' => ['boolean'],
        ]);

        $formFields['password'] = bcrypt($formFields['password']);

        $user = User::create($formFields);
        Auth::login($user);

        return redirect('/')->with('success', 'User created and logged in successfully');
    }

    // Register
    public function login()
    {
        return Inertia::render('auth/Login');
    }
    public function authenticate(Request $request)
    {
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6'],
        ]);

        if (Auth::attempt($formFields)) {
            $request->session()->regenerate();
            return redirect('/')->with('success', 'You have been logged in successfully');
        }

        return back()->withErrors(['email' => 'Invalid Credentials'])->onlyInput('email');
    }

    // Logout
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('success', 'User logged out');
    }

    public function profile(User $user)
    {
        $user = Auth::user();
        $bookings = Booking::with('car')->where('user_id', $user->id)->latest()->get();

        return Inertia::render('auth/Profile', [
            'bookings' => $bookings,
        ]);
    }

    public function edit(User $user)
    {
        $user = Auth::user();
        return Inertia::render('auth/EditProfile', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $formFields = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($user->id),
            ],
            'phone' => ['required', 'string', 'regex:/^\+?[0-9\s\-]{7,20}$/'],
            'password' => ['nullable', 'min:6', 'confirmed'], // nullable allows no change
            'admin' => ['boolean'],
        ]);

        if (!empty($formFields['password'])) {
            $formFields['password'] = Hash::make($formFields['password']);
        } else {
            unset($formFields['password']);
        }

        $user->update($formFields);

        return redirect('/')->with('success', 'User updated successfully');
    }

}
