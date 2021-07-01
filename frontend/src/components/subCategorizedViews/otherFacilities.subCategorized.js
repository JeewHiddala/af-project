import React from "react";
import '../dashboards/admin.dashboard.css';
import postsApprovalImg from '../images/approved.png';
import WorkshopProposalImg from '../images/contract.png';
import ResearchPaperUploadsImg from '../images/upload.png';


function OtherFacilities() {
    return (
        <div>
            <div className = "topic">
                <h2> Other Facilities. </h2>
            </div>
        <div className="container">
            <div className = "row">
                <div className = "col-4">
                    <a href = "/postadminview" >
                        <div className="card-sub" >
                            <img src={postsApprovalImg} className="card-img-top" alt="admin"/>
                            <div className="card-body">
                                <h3 className= "card-text">Posts Approval List</h3>
                                <p className="card-text">You can approve or decline posts which sends from editors.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/workshop" >
                        <div className="card-sub" >
                            <img src={WorkshopProposalImg} className="card-img-top" alt="editor"/>
                            <div className="card-body">
                                <h3 className= "card-text">Workshop Proposal Details</h3>
                                <p className="card-text">You can see all Workshop Proposal Details from here</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className = "col-4">
                    <a href = "/paperupload" >
                        <div className="card-sub" >
                            <img src={ResearchPaperUploadsImg} className="card-img-top" alt="reviewer"/>
                            <div className="card-body">
                                <h3 className= "card-text">Research Paper Uploads Details</h3>
                                <p className="card-text">You can see all Research Paper Uploads Details from here</p>
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

export default OtherFacilities;