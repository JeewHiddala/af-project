import './editworkshopProposals.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';

class EditWorkshopProposals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshopProposal: []
    }
    
  }
  componentDidMount(){
   
    axios.get(`http://localhost:7000/workshopProposal/${this.props.match.params.id}`)
    .then(response => {
      this.setState({workshopProposal: response.data.data});
    })
    .then(() =>{
      console.log(this.state.workshopProposal)
                this.setState({ content: this.state.workshopProposal.content });
                this.setState({ title: this.state.workshopProposal.title });
                this.setState({ venue: this.state.workshopProposal.venue });
                this.setState({ date: this.state.workshopProposal.date });
                this.setState({ organizers: this.state.workshopProposal.organizers });
                this.setState({ duration: this.state.workshopProposal.duration });
                this.setState({ type: this.state.workshopProposal.type });
                this.setState({ status: this.state.workshopProposal.status });
                this.setState({ document: this.state.workshopProposal.document });

    });
  }

  confirmWorkshopProposal(e, workshopProposalId) {
    this.props.history.push({
        pathname: `/confirm/${workshopProposalId}`,
        data:`${workshopProposalId}`
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
                                <label htmlFor="title"  className="form-label">Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.onChange}
                                />
                            </div>
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
                                <label htmlFor="venue"  className="form-label">Venue</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="venue"
                                    name="venue"
                                    value={this.state.venue}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="date"  className="form-label">Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={this.state.date}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="organizers"  className="form-label">Organizers</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="organizers"
                                    name="organizers"
                                    value={this.state.organizers}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="duration"  className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="duration"
                                    name="duration"
                                    value={this.state.duration}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="type"  className="form-label">Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    value={this.state.type}
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
                                <label htmlFor="document"  className="form-label">Document</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="document"
                                    name="document"
                                    value={this.state.document}
                                    onChange={this.onChange}
                                />
                            </div>
                            
                            <button type="button" className="btn btn-success"  onClick={e => this.confirmWorkshopProposal(e,this.props.match.params.id)} >Approve / Decline</button>
                            
    
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


export default EditWorkshopProposals;