<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Student::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $validator = Validator::make($request->all(), [
            '*' => 'required'
        ],[
            'student_name.required' => 'Student name is required',
            'student_email.required' => 'Student email is required',
            'student_class.required' => 'Student class is required',
        ]);


        try {
            $student = new Student();
            $student->student_name = $request->student_name;
            $student->student_email = $request->student_email;
            $student->student_class = $request->student_class;
            $student->save();
            return response()->json(['success' => 'Student added success']);

        } catch (Exception $ex) {
                return response()->json([
                    'status' => '422',
                    'error' => $validator->errors()
                ]);
            
        }
 

 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        

        $validator = Validator::make($request->all(), [
            '*' => 'required'
        ],[
            'student_name.required' => 'Student name is required',
            'student_email.required' => 'Student email is required',
            'student_class.required' => 'Student class is required',
        ]);


        try {
            $student = Student::findOrFail($id);
            $student->student_name = $request->student_name;
            $student->student_email = $request->student_email;
            $student->student_class = $request->student_class;
            $student->save();
            return response()->json(['success' => 'Student Update success']);

        } catch (Exception $ex) {
                return response()->json([
                    'status' => '422',
                    'error' => $validator->errors()
                ]);
            
        }



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Student::findOrFail($id)->delete();
        return response()->json(['success' => 'Student delete success']);
    }
}
