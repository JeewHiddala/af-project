import './researchPaperUpload.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';
import CheckoutSteps from '../checkoutSteps/checkoutSteps'

class ResearchPaperUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchPaper: [],
      
    }
    this.deleteResearchPaperUpload = this.deleteResearchPaperUpload.bind(this);
    this.viewResearchPaperUpload = this.viewResearchPaperUpload.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:7000/researchPaper/')
    .then(response => {
      this.setState({ researchPaper: response.data.data });
    })
    
  }
  viewResearchPaperUpload(e, researchPaperId){
    this.props.history.push({
      pathname: `/view/${researchPaperId}`,
      data:`${researchPaperId}`
    });
  }
  
 
  deleteResearchPaperUpload(e , researchPaperId) {
    console.log("Delete", researchPaperId)
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
            axios.delete(`http://localhost:7000/researchPaper/${researchPaperId}`)
            Swal.fire(
                'Deleted!',
                'Research Paper has been deleted.',
                'success'
            )
        }
    })
  }


  render() {
    return (
      <div>
      <CheckoutSteps step2></CheckoutSteps>
      
        <div className="container">
            <br/>
            <div className = "row">
                <div className="col-8"><h3>Research Paper Uploads</h3></div>
              
            </div>
            <div className = "row">
                
            </div>
            <br/>
            <div>
            
            </div>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Autors</th>
                            <th scope="col">Conference Name</th>
                            <th scope="col">Research Area</th>
                            <th scope="col">Submitted Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Approved Date</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.researchPaper.length > 0 && this.state.researchPaper.map((item, index) => (
                          
                            <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.authors}</td>
                            <td>{item.conferenceName}</td>
                            <td>{item.researchArea}</td>
                            <td>{item.submittedDate}</td>
                            <td>{item.status}</td>
                            <td>{item.approvedDate}</td>
                            
                            <td><button type="button" className="btn btn-primary"  onClick={e => this.viewResearchPaperUpload(e, item._id)} >View</button></td>
                            <td><button type="button" className="btn btn-danger"  onClick={e => this.deleteResearchPaperUpload(e, item._id)} >Delete</button></td>
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
export default ResearchPaperUpload;