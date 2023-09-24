import { Component } from "react";
import { Link } from "react-router-dom";

class Student extends Component{
 render(){
    <div className="container" >
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Student Data</h4>
                        <Link to={"add-student"} className="btn btn-primary btn-btn-float" >Add Student</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
 };
}
export default Student;