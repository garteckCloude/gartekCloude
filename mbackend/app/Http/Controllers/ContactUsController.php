<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        ContactUs::create($data);

        \Mail::to($request->email)->send(new \App\Mail\ContactUsMail);

        return response()->json(['message' => 'Your message is received successfully.']);

    }
}
