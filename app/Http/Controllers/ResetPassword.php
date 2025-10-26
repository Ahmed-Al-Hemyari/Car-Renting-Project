<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class ResetPassword extends Controller
{
    //
    public function create(User $user)
    {
        return Inertia::render('auth/UpdatePassword', [
            'user' => $user
        ]);
    }

    public function store(User $user, Request $request)
    {
        $formFields = $request->validate([
            'old_password' => ['required'],
            'new_password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if (!Hash::check($formFields['old_password'], $user->password)) {
            return back()->withErrors(['old_password' => 'The current password is incorrect.']);
        }

        $user->update([
            'password' => Hash::make($formFields['new_password']),
        ]);

        return redirect('/profile')->with('success', 'Password updated successfully.');
    }
}
