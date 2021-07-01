import React from "react";
import '../dashboards/admin.dashboard.css';
import adminImg from '../images/admin-dashboard.png';
import nonAdminImg from '../images/nonAdmin- dashboards.png';
import otherFacilitiesImg from '../images/innovation.png';


function AdminDashboard() {
    return (
        <div>
            <div className = "topic">
                <h2> Administration Dashboard </h2>
            </div>
        <div className="container">
            <div className = "row">
                <div className = "col-4">
                    <a href = "/adminSubcategories" >
                        <div className="card-sub" >
                            <img src={adminImg} className="card-img-top" alt="admin"/>
                            <div className="card-body">
                                <h3 className= "card-text">Administrators Registration Details</h3>
                                <p className="card-text">You can manage all Administrational Registration Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/nonAdminSubcategories" >
                        <div className="card-sub" >
                            <img src={nonAdminImg} className="card-img-top" alt="editor"/>
                            <div className="card-body">
                                <h3 className= "card-text">Non-Administrators Registration Details</h3>
                                <p className="card-text">You can see Non-Administrational like Reaserch Paper presenters and Workshop Presenters Registration Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/otherFacilities" >
                        <div className="card-sub" >
                            <img src={otherFacilitiesImg} className="card-img-top" alt="reviewer"/>
                            <div className="card-body">
                                <h3 className= "card-text">Other Facilities</h3>
                                <p className="card-text">You can view other facilitues and their details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AdminDashboard;