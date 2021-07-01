import React from "react";
import './admin.subCategory.css';
import adminImg from '../images/admin.png';
import editorImg from '../images/editor.png';
import reviewerImg from '../images/reviewer.png';

function AdminSubcategories() {
    return (
        <div>
            <div className = "topic">
                <h2> System Administrational Users Categories </h2>
            </div>
        <div className="container">
            <div className = "row">
                <div className = "col-4">
                    <a href = "/admin" >
                        <div className="card-sub" >
                            <img src={adminImg} className="card-img-top" alt="admin"/>
                            <div className="card-body">
                                <h3 className= "card-text">Administrators Registration Details</h3>
                                <p className="card-text">You can manage all Administrators Registration Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/editor" >
                        <div className="card-sub" >
                            <img src={editorImg} className="card-img-top" alt="editor"/>
                            <div className="card-body">
                                <h3 className= "card-text">Editors Registration Details</h3>
                                <p className="card-text">You can manage all Editors Registration Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/reviewer" >
                        <div className="card-sub" >
                            <img src={reviewerImg} className="card-img-top" alt="reviewer"/>
                            <div className="card-body">
                                <h3 className= "card-text">Reviewers Registration Details</h3>
                                <p className="card-text">You can manage all Researchers Registration Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row center">
            <a href="/adminDashboard"><button className="btn btn-outline-primary">Back</button></a>
            </div>
        </div>
        </div>
    );
}

export default AdminSubcategories;