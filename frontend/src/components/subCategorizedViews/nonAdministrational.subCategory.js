import React from "react";
import './admin.subCategory.css';
import attendeesImg from '../images/attendees.png';
import presenterImg from '../images/presenter.png';


function AdminSubcategories() {
    return (
        <div>
            <div className = "topic">
                <h2> Non Administrational Users Categories </h2>
            </div>
        <div className="container">
            <div className = "row">
                <div className = "col-4 wd-5 ">
                    <a href = "/attendeeView" >
                        <div className="card-sub" >
                            <img src={attendeesImg} className="card-img-top" alt="admin"/>
                            <div className="card-body">
                                <h3 className= "card-text">Attendees Registration Details</h3>
                                <p className="card-text">You can see all Attendees Registration Details from here</p>
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