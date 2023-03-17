import React from "react";



const Create = () => {

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <form>
                        <div className="form-group mt-5">
                            <label>Student Name</label>
                            <input type="text" className="form-control" placeholder="Student Name " />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div className="form-group mt-3">
                            <label>Student Email</label>
                            <input type="text" className="form-control" placeholder="Student Email " />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div className="form-group mt-3 mb-3">
                            <label>Student Class</label>
                            <input type="number" className="form-control" placeholder="Student Class " />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;