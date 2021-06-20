<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pagecontroller extends Controller
{
    public function index($id)
    {
    	$ids= $id;
    	return view('fontend.secure_software_order',compact("ids"));
    }
    public function index1($id2)
    {
    	$ids= $id2;
    	return view('fontend.secure_software_order',compact("ids"));
    }
    public function ss($id3)
    {
    	$ids= $id3;
    	return view('fontend.secure_software_order',compact("ids"));
    }
}
