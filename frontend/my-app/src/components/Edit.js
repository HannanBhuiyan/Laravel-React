import React , { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "../Http";
 

const Edit = () => {

    const navigate = useNavigate();
    const {id} = useParams()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [student_class, setStudentClass] = useState("")
    const [validationError, setValidationError] = useState({})


    useEffect( () => {
        fetchStudent()
    },[])

   const fetchStudent = () => {
        http.get("/student/"+id+"/edit").then( (res) => {
            const {student_name, student_email, student_class } = res.data;
            setName(student_name);
            setEmail(student_email);
            setStudentClass(student_class) 
        })

   }


   const updateStudent = (e) => {
        e.preventDefault();

      const formData = new FormData();
      formData.append('student_name', name);
      formData.append('student_email', email);
      formData.append('student_class', student_class);

      http.put('/student/'+id, formData).then( (res) => {
            if (res.data.status == 422) {
                setValidationError(res.data.error)
            }
            else {
                navigate('/')
            }
      })
   }


    return(
        <>
             <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <form onSubmit={updateStudent}>
                        <div className="form-group mt-5">
                            <label>Student Name</label>
                            <input type="text" name="student_name" value={name} onChange={ (event) => setName(event.target.value) } className="form-control" placeholder="Student Name " />
                            <small className="form-text text-danger">{validationError.student_name}</small>
                        </div> 
                        <div className="form-group mt-3">
                            <label>Student Email</label>
                            <input type="text" name="student_email" value={email} onChange={ (event) => setEmail(event.target.value) } className="form-control" placeholder="Student Email " />
                            <small className="form-text text-danger">{validationError.student_email}</small>
                        </div> 
                        <div className="form-group mt-3 mb-3">
                            <label>Student Class</label>
                            <input type="number" name="student_class" value={student_class} onChange={ (e) => setStudentClass(e.target.value) } className="form-control" placeholder="Student Class " />
                            <small className="form-text text-danger">{validationError.student_class}</small>
                        </div> 
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit;