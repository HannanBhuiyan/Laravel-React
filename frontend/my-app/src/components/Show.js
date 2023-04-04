import React , { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "../Http";
 

const Show = () => {
 
    const {id} = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [student_class, setStudentClass] = useState("")


    useEffect( () => {
        fetchShowSingleData()
    },[])
   
    const fetchShowSingleData = async () => {
        await http.get(`/student/${id}`).then( (res) => {
            const {student_name, student_email, student_class } = res.data;
            console.log(res.data)
            setName(student_name);
            setEmail(student_email);
            setStudentClass(student_class) 
        })
    }



    return(
        <>
             <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <form>
                        <div className="form-group mt-5">
                            <label>Student Name</label>
                            <input type="text" name="student_name" disabled value={name} className="form-control" placeholder="Student Name " />
                        </div> 
                        <div className="form-group mt-3">
                            <label>Student Email</label>
                            <input type="text" name="student_email" disabled value={email} className="form-control" placeholder="Student Email " />
                        </div> 
                        <div className="form-group mt-3 mb-3">
                            <label>Student Class</label>
                            <input type="number" name="student_class" disabled value={student_class} className="form-control" placeholder="Student Class " />
                        </div> 
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show;