import './workshopProposal.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';
import CheckoutSteps from '../checkoutSteps/checkoutSteps'
import 'bootstrap/dist/css/bootstrap.min.css';


class workshopProposal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshopProposal: [],
      
    }
    this.deleteProposal = this.deleteProposal.bind(this);
    //this.viewProposal = this.viewProposal.bind(this);
    this.editProposal = this.editProposal.bind(this);

  }
  componentDidMount() {
    axios.get('http://localhost:7000/workshopProposal/')
    .then(response => {
      this.setState({ workshopProposal: response.data.data });
    })
  }

  editProposal(e, workshopProposalId){
      this.props.history.push({
      pathname: `/edit/${workshopProposalId}`,
      data:`${workshopProposalId}`
  });
}


  deleteProposal(e , workshopProposalId) {
    console.log("Delete", workshopProposalId)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:7000/workshopProposal/${workshopProposalId}`)
            Swal.fire(
                'Deleted!',
                'Workshop Proposal has been deleted.',
                'success'
            )
        }
    })
}

  render() { 
    return (    
      <div >
      <CheckoutSteps step1></CheckoutSteps>
      
        <div className="container">
            <br/>
            <div className = "row">
              <div className="col-8"><h3>Workshop Proposals</h3></div>   
            </div>
              <div className = "row">     
            </div>
            <br/>
                <div className="container">
                  <br></br>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Content</th>
                            <th scope="col">Title</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Date</th>
                            <th scope="col">Organizers</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.workshopProposal.length > 0 && this.state.workshopProposal.map((item, index) => (
                          
                            <tr key={index} >
                            <td>{item.content}</td>
                            <td>{item.title}</td>
                            <td>{item.venue}</td>
                            <td>{item.date}</td>
                            <td>{item.organizers}</td>
                            <td>{item.duration}</td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                          
                            <td><button type="button"  className="btn btn-primary" onClick={e => this.editProposal(e, item._id)} >View</button>
                            </td>
                      
                            <td><button type="button" className="btn btn-danger"  onClick={e => this.deleteProposal(e, item._id)} >Delete</button></td>
                            </tr>
                        ))}    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     )
  }
}


export default workshopProposal;
