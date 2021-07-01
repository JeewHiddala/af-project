import './editProfile.css';
//import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';



const initialState = {      //initiate states
  name:'',
  email: '',
  nicNo: '',
  address: '',
  mobileNumber: 0,
  userName: '',
  password: '',
  editorSalary: 0
  
}

class editEditorProfile extends Component {
  constructor(props) {  
    super(props);
    //this.onChange = this.onChange.bind(this);  
   // this.onSubmit = this.onSubmit.bind(this);   
    this.state = initialState;      
    
}

componentDidMount(){
    //this.setState({workshopProposal:this.props.match.params.id},this.getworkshopProposal)

    axios.get('http://localhost:7000/editor/60d6f00f60441b3b90a72a45')
    .then(response => {
    console.log("abc"+response)
      this.setState({editors: response.data.data});
      console.log("ssss"+editors)
    })
    .then(() =>{
      console.log(this.state.editors)
    
                this.setState({ name: this.state.editors.name });
                this.setState({ email: this.state.editors.email });
                this.setState({ nicNo: this.state.editors.nicNo });
                this.setState({ address: this.state.editors.address });
                this.setState({ mobileNumber: this.state.editors.mobileNumber });
                this.setState({ userName: this.state.editors.userName });
                this.setState({ password: this.state.editors.password });
                this.setState({ editorSalary: this.state.editors.editorSalary });
                

    });
  }


render(){
return (
    
<div className="container">
        <h1>Editor Profile</h1>
<form onSubmit={this.onSubmit}>
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
<div className="card-body">
<div className="account-settings">
  <div className="user-profile">
    <div className="userimage">
    
    </div>
    <h5 className="username">{this.state.userName}</h5>
    <h6 className="email">{this.state.email}</h6>
  </div>
  <div className="about">
    <h5>About</h5>
    <p>I'm a Editor. Responsible for Creating,Updating and deleting post </p>
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
      <label for="editorSalary">Editor Salary</label>
      <input type="number" 
                className="form-control" 
                id="editorSalary" 
                name="editorSalary"
                placeholder="Enter Salary"
                value={this.state.editorSalarySalary}
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

  export default editEditorProfile;