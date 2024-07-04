<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rules;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        request()->validate([
            'email' => 'required|string|email|exists:users,email',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['message' => 'Incorrect email or password'], 401);
        }

        // 43200 minutes == 30 days
        $TTL = request()->remember ? 43200 : auth()->factory()->getTTL();

        return $this->respondWithToken(request()->has('remember') ? $this->longToken($TTL) : $token, $TTL);
    }


    private function longToken(int $customTTL)
    {
        return JWTAuth::claims(['exp' => now()->addMinutes($customTTL)->timestamp])->fromUser(auth()->user());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken(string $token, $customTTL = null)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => !$customTTL ? auth()->factory()->getTTL() * 60 : $customTTL * 60
        ]);
    }

}
