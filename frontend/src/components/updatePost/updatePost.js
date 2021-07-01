import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const initialState = {
  id:'',
  title: '',
  description: '',
  submittedDate: '',
  status: '',
  approvedDate: '',
  approvedAdmin:'',
  createdEditor:''

}

class updatePosts extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);  //bind onChange function.
    this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
    this.state = initialState;      //apply states.
  }

  onChange(e) {     //update states
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    const post = this.props.match.params.id;
    console.log("rrrr" + this.props.match.params.id);
    axios.get(`http://localhost:7000/post/${post}`)
      .then(response => {
        this.setState({ id: response.data.data._id })
        this.setState({ title: response.data.data.title })
        this.setState({ description: response.data.data.description })
        this.setState({ submittedDate: response.data.data.submittedDate })
        this.setState({ status: response.data.data.status })
        this.setState({ approvedDate: response.data.data.approvedDate })

        console.log(response.data.data)
      })
      .catch(error => {
        alert(error.message)
      })

  }


  onSubmit(e) {      //submit details
    e.preventDefault();     //avoid browser refresh
    let post = {
      title: this.state.title,
      description: this.state.description,
      submittedDate: this.state.submittedDate,
      status: this.state.status,
      approvedDate: this.state.approvedDate
    }
    console.log('DATA TO SEND', post);
    axios.patch(`http://localhost:7000/post/update/${this.state.id}`, post)
      .then(response => {
        // alert('Post Data successfully updated')
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
        <h1>Edit Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
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
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            >
            </textarea>

          </div>
          <div className="mb-3">
            <label htmlFor="submittedDate" className="form-label">Submitted Date</label>
            <input
              type="date"
              className="form-control"
              id="submittedDate"
              name="submittedDate"
              value={this.state.submittedDate}
              onChange={this.onChange}

            />

          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
              isDisabled
            />
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
              isDisabled
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-success">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

export default updatePosts;