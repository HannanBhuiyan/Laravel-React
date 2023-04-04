import React, { useState, useEffect } from "react";

import http from "../Http";
import { Link, NavLink } from 'react-router-dom';
 


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

       

    const deleteProduct = async (id) => {
        await http.delete(`/student/${id}`).then( (res) => {
            fetchAllStudent()
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
                                    <NavLink className="btn btn-info" to={`/edit/${student.id}`} >Edit</NavLink>
                                    <Link className="btn btn-success mx-3" to={`/show/${student.id}`}>View</Link>
                                    <button onClick={ () => deleteProduct(student.id)} className="btn btn-danger" >Delete</button>
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