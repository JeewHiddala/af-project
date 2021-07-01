import './workshopProposal.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';

class editResearchPaperUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchPaper: []

    }
    

  }

  
  componentDidMount(){
    //this.setState({workshopProposal:this.props.match.params.id},this.getworkshopProposal)

    axios.get(`http://localhost:7000/researchPaper/${this.props.match.params.id}`)
    .then(response => {
      this.setState({researchPaper: response.data.data});
    })
    .then(() =>{
      console.log(this.state.researchPaper)
                this.setState({ title: this.state.researchPaper.title });
                this.setState({ authors: this.state.researchPaper.authors });
                this.setState({ conferenceName: this.state.researchPaper.conferenceName });
                this.setState({ researchArea: this.state.researchPaper.researchArea });
                this.setState({ submissionFile: this.state.researchPaper.submissionFile });
                this.setState({ submittedDate: this.state.researchPaper.submittedDate });
                this.setState({ status: this.state.researchPaper.status });
                this.setState({ approvedDate: this.state.researchPaper.approvedDate });

    });
  }
  confirmReseachPaperUpload(e, researchPaperId) {
    this.props.history.push({
        pathname: `/configure/${researchPaperId}`,
        data:`${researchPaperId}`
      });
  
  }



  render(){
    return (

        <div className="container"><br/>
            <div className={"card p-4"}>
            
                <h5 htmlFor="content"  className="form-label mb-4" style={{textAlign:"left"}}>
                    {}
                </h5>

                <form onSubmit={this.onSubmit} onChange={this.onHandle}>
                
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="title"  className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="authors"  className="form-label">Authors</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="authors"
                                    name="authors"
                                    value={this.state.authors}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="conferenceName"  className="form-label">Conference Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="conferenceName"
                                    name="conferenceName"
                                    value={this.state.conferenceName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="researchArea"  className="form-label">Research Area</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="researchArea"
                                    name="researchArea"
                                    value={this.state.researchArea}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="submissionFile"  className="form-label">Submission File</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="submissionFile"
                                    name="submissionFile"
                                    value={this.state.submissionFile}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="submittedDate"  className="form-label">Submitted Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="submittedDate"
                                    name="submittedDate"
                                    value={this.state.submittedDate}
                                    onChange={this.onChange}
                                />
                            </div>
                          
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="status"  className="form-label">Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="status"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="approvedDate"  className="form-label">Approved Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="approvedDate"
                                    name="approvedDate"
                                    value={this.state.approvedDate}
                                    onChange={this.onChange}
                                />
                            </div>
                            
                            <button type="button" className="btn btn-success"  onClick={e => this.confirmReseachPaperUpload(e,this.props.match.params.id)} >Approve / Decline</button>
    
                            
                            </div>
                          </div>
                        <br></br>
                      <br></br>
                    <br></br>
                </form>
            </div>
        </div>
    )
  }                         
}


export default editResearchPaperUpload;