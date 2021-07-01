import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const initialState = {      //initiate states
    id:'',
    title: '',
    description: '',
    submittedDate: '',
    createdEditor:'',
    status: '',
    approvedDate: '',
    remarks:''
}
class approveSelectedPost extends Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);  //bind onChange function.
      this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
      this.back = this.back.bind(this);
      this.state = initialState;      //apply states.
    }
  
    componentDidMount() {
      const approvePost = this.props.match.params.id;
      console.log("rrrr" + approvePost);
      axios.get(`http://localhost:7000/post/${approvePost}`)
        .then(response => {
          this.setState({ id: response.data.data._id })
          this.setState({ title: response.data.data.title })
          this.setState({ description: response.data.data.description })
          this.setState({ submittedDate: response.data.data.submittedDate })
          this.setState({ createdEditor: response.data.data.editors.name })
          this.setState({ status: response.data.data.status })
          this.setState({ approvedDate: response.data.data.approvedDate })
          this.setState({ remarks: response.data.data.remarks })
  
          console.log("stat"+response.data.data.status)
        })
        .catch(error => {
          alert(error.message)
        })
  
    }

    onChange(e) {     //update states
      this.setState({ [e.target.name]: e.target.value })
    }

    back(e) {
      window.location = '/postadminview'
  }
  
    onSubmit(e) {      //submit details
      e.preventDefault();     //avoid browser refresh
      let approvePost = {
        title: this.state.title,
        description: this.state.description,
        submittedDate: this.state.submittedDate,
        createdEditor: this.state.createdEditor,
        status: this.state.status,
        approvedDate: this.state.approvedDate,
        remarks: this.state.remarks
      }
      console.log('DATA TO SEND', approvePost);
      axios.patch(`http://localhost:7000/post/update/${this.state.id}`, approvePost)
        .then(response => {
          // alert('Post Data successfully updated')
          console.log('DATA TO SEND', approvePost);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Updated Posts details has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => {
          console.log(error.message);
          alert(error.message)
        })
    }
  
    render() {
      return (
        <div className="container">
        <br/>
          <h1>Post Validation</h1>
          <form onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
              disabled
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
  
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                disabled
                className="form-control"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              >
              </textarea>
            </div>
            <div className="row">
            <div className="mb-3">
              <label htmlFor="submittedDate" className="form-label">Submitted Date</label>
              <input
              disabled
                type="text"
                className="form-control"
                id="submittedDate"
                name="submittedDate"
                value={this.state.submittedDate}
                onChange={this.onChange}
              />
  
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Created Editor</label>
              <input
              disabled
                type="text"
                className="form-control"
                id="createdEditor"
                name="createdEditor"
                value={this.state.createdEditor}
                onChange={this.onChange}
              />
  
            </div>
            </div>
            <div className="row">
            <div className="mb-3 col-4">
              <label htmlFor="status" className="form-label">Status</label>
              <select className="form-select mb-3" id="lang" 
                  onChange={this.onChange} 
                  value={this.state.status}
                  name="status"
                  >
                      <option value="Pending">Pending </option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
              </select>
            </div>
            </div>
            <div className="mb-3">
              <label htmlFor="approvedDate" className="form-label">Approved Date</label>
              <input
                type="date"
                className="form-control"
                id="approvedDate"
                name="approvedDate"
                value={this.state.approvedDate}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="remarks" className="form-label">Remarks</label>
              <textarea
                className="form-control"
                id="remarks"
                name="remarks"
                value={this.state.remarks}
                onChange={this.onChange}
              >
              </textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-outline-success">Update</button>
            </div>
          </form>
          <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> Back</button></div>
          <br/> <br/> <br/> <br/>
        </div>
      )
    }
  }

export default approveSelectedPost;