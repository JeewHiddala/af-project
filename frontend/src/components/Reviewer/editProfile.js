import './editProfile.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';
import image from '../images/w1.jpg';
import CheckoutSteps from '../checkoutSteps/checkoutSteps';


const initialState = {      
         name:'',
         email: '',
         nicNo: '',
         address: '',
         mobileNumber: 0,
         userName: '',
         password: '',
         reviewerSalary: 0,
         reviewers: []
}

class editRevieweProfile extends Component {
  constructor(props) {  
      super(props);
      this.onChange = this.onChange.bind(this);  
      this.onSubmit = this.onSubmit.bind(this);   
      this.state = initialState;      
    
}

updateReviewer(e, reviewerId){
    this.props.history.push({
    pathname: `/rupdate/${reviewerId}`,
    data:`${reviewerId}`
  });
}

onChange(e) {     
    this.setState({ [e.target.name]: e.target.value })
}

componentDidMount(){
  
      axios.get(`http://localhost:7000/reviewer/${this.props.location}`)
      .then(response => {
      this.setState({reviewers: response.data.data});
    })
      .then(() =>{
      console.log(this.state.reviewers)
                this.setState({ name: this.state.reviewers.name });
                this.setState({ email: this.state.reviewers.email });
                this.setState({ nicNo: this.state.reviewers.nicNo });
                this.setState({ address: this.state.reviewers.address });
                this.setState({ mobileNumber: this.state.reviewers.mobileNumber });
                this.setState({ userName: this.state.reviewers.userName });
                this.setState({ password: this.state.reviewers.password });
                this.setState({ reviewerSalary: this.state.reviewers.reviewerSalary });
    });
  }

  onSubmit(e,userId) {      
  e.preventDefault(); 
        let reviewer = {    
               name: this.state.name,
               email: this.state.email,
               nicNo: this.state.nicNo,
               address: this.state.address,
               mobileNumber: this.state.mobileNumber,
               userName: this.state.userName,
               password: this.state.password,
              reviewerSalary: this.state.reviewerSalary,
    
}
            console.log('DATA TO SEND', reviewer);    
            axios.patch(`http://localhost:7000/reviewer/update/${userId}`, reviewer)
            .then(response => {
        
            Swal.fire({
                 position: 'center',
                  icon: 'success',
                  title: ' Reviewer details Updated',
                  showConfirmButton: false,
                  timer: 1500
                  })
                })
              .catch(error => {
              console.log(error.message);
              alert(error.message)
                })
              }

      render(){
        const { data } = this.props.location
        console.log("userid: " + data);
          return (
    
                <div className="container">
                    <CheckoutSteps step3></CheckoutSteps>
                    <h1>Reviewer Profile</h1>
                <form onSubmit={e => this.onSubmit(e,data)}>
                  <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                    <div className="card-body">
                    <div className="account-settings">
                  <div className="user-profile">
                  <div className="userimage">
                  <img src={image} alt="Reviewer image"></img>
                  </div>
                  <h5 className="username">{this.state.userName}</h5>
                  <h6 className="email">{this.state.email}</h6>
                  </div>
                  <div className="about">
                      <h5>About</h5>
                  <p>I'm a Reviewer. Responsible for approving and declining workshop Proposals and research Paper Uploads </p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
        <div className="card-body">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 className="mb-2 text-primary">Personal Details</h6>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <label for="Name">Name</label>
              <input type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        placeholder="Enter name"
                        value={this.state.name}
                        onChange={this.onChange}/>
                        
                  </div>
              </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label for="eMail">Email</label>
                <input type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="Enter email ID"
                          value={this.state.email}
                          onChange={this.onChange}
                          />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label for="phone">Mobile No</label>
                <input type="number" 
                          className="form-control" 
                          id="mobileNumber" 
                          name="mobileNumber"
                          placeholder="Enter mobile number"
                          value={this.state.mobileNumber}
                          onChange={this.onChange}
                          />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label for="nic">NIC</label>
                <input type="text" 
                          className="form-control" 
                          id="nicNo" 
                          name="nicNo"
                          placeholder="Enter NIC"
                          value={this.state.nicNo}
                          onChange={this.onChange}
                          />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mt-3 mb-2 text-primary">Address And Other Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label for="homeAdress">Home Adress</label>
                <input type="text" 
                          className="form-control" 
                          id="address" 
                          name="address"
                          placeholder="Enter Address"
                          value={this.state.address}
                          onChange={this.onChange}
                          />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label for="userName">UserName</label>
                <input type="text" 
                          className="form-control" 
                          id="userName" 
                          name="userName"
                          placeholder="Enter userName"
                          value={this.state.userName}
                          onChange={this.onChange}
                          />
              </div>
            </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <label for="reviewerSalary">reviewerSalary</label>
              <input type="number" 
                        className="form-control" 
                        id="reviewerSalary" 
                        name="reviewerSalary"
                        placeholder="Enter Salary"
                        value={this.state.reviewerSalary}
                        onChange={this.onChange}
                        />
            </div>
          </div>
        </div>
            <br></br>
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="text-right">
              <button type="submit" className="btn btn-primary" >Update</button>
            </div>
          </div>
        </div>
          <br></br>
          <br></br>
          <br></br>
          </div>
       </div>
      </div>
    </div>
  </form>
</div>    
    )
}                         
}

  
  
  export default editRevieweProfile;