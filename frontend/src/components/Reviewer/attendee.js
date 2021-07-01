import './attendee.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';
import CheckoutSteps from '../checkoutSteps/checkoutSteps'
import 'bootstrap/dist/css/bootstrap.min.css';


class viewAttendees extends Component {
  constructor(props) {
    super(props);
    this.state = {
         attendee: []
      
    }
    this.deleteAttendee = this.deleteAttendee.bind(this);
    this.viewAttendee = this.viewAttendee.bind(this);

  }
  componentDidMount() {
    axios.get('http://localhost:7000/attendee/')
    .then(response => {
         this.setState({ attendee: response.data.data });
    })
  }

  viewAttendee(e, attendeeId){
      this.props.history.push({
      pathname: `/attendee-view/${attendeeId}`,
      data:`${attendeeId}`
  });
}


  deleteAttendee(e , attendeeId) {
    console.log("Delete", attendeeId)
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
            axios.delete(`http://localhost:7000/attendee/${attendeeId}`)
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
      <CheckoutSteps step3></CheckoutSteps>
      
        <div className="container">
            
            <div className = "row">
              <div className="col-8"><h3>Attendees</h3></div>   
            </div>
              <div className = "row">     
            </div>
                <div className="container">
                  <br></br>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">MobileNo</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Work Place</th>
                            <th scope="col">Type</th>
                            <th scope="col">Country</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.attendee.length > 0 && this.state.attendee.map((item, index) => (
                          
                            <tr key={index} >
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobileNo}</td>
                            <td>{item.username}</td>
                            <td>{item.workplace}</td>
                            <td>{item.type}</td>
                            <td>{item.country}</td>
                        
                          
                            <td><button type="button"  className="btn btn-primary" onClick={e => this.viewAttendee(e, item._id)} >View</button>
                            </td>
                      
                            <td><button type="button" className="btn btn-danger"  onClick={e => this.deleteAttendee(e, item._id)} >Delete</button></td>
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


export default viewAttendees;
