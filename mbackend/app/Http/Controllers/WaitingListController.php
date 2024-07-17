<?php

namespace App\Http\Controllers;

use App\Http\Resources\WaitlistResource;
use App\Mail\WaitlistWelcomeMail;
use App\Models\WaitingList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WaitingListController extends Controller
{

    public function index()
    {
        return WaitlistResource::collection(WaitingList::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:waiting_list,email',
        ]);


        WaitingList::create($request->only('email'));

        Mail::to($request->email)->send(new WaitlistWelcomeMail);

        return response()->json(['message' => 'You have been added to the waiting list.']);
    }

    public function destroy($id)
    {
        WaitingList::destroy($id);

        return response()->json(['message' => 'User removed from waiting list.']);
    }

    public function destroyAll()
    {
        WaitingList::truncate();

        return response()->json(['message' => 'All users removed from waiting list.']);
    }
}
