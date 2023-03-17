import React, { useState, useEffect } from "react";

import http from "../Http";


const Home = () => {


    const [students, setStudent] = useState([]);


    useEffect( () => {
        fetchAllStudent()
    },[])

    const fetchAllStudent = () => {
        http.get('/student').then(function(res){
            setStudent(res.data)
        })
    }

       

    return(
        
        <>
            <div className="container">
                <table className="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Email</th>
                        <th scope="col">Student Class</th>
                        <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {students.map( (student, index ) => { 
                            const {student_name, student_email, student_class} = student;
                            return <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{student_name}</td>
                                <td>{student_email}</td>
                                <td>{student_class}</td>
                                <td>
                                    <a className="btn btn-info" href="#">Edit</a>
                                    <a className="btn btn-success mx-3" href="#">View</a>
                                    <a className="btn btn-danger" href="#">Delete</a>
                                </td>
                        </tr>

                        } )}
                    
                        </tbody>
                    </table>
            </div>
        </>
    )
}

export default Home;