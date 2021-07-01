import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

class postAdView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:7000/post/')
      .then(response => {
        this.setState({ posts: response.data.data });
      })
  }

  navigateEditPostPage(e, postId) {
    window.location = `/updatePost/${postId}`
}

back(e) {
  window.location = '/postadminview'
}

deletePost(e , postId) {
  console.log("I am on Delete", postId)
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
          axios.delete(`http://localhost:7000/post/${postId}`)
          Swal.fire(
              'Deleted!',
              'Product has been deleted.',
              'success'
          )
      }
  })
}
  render() {
    return (
      <div className="container">
        <br/>
        <h1>Posts - Admin View</h1>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Submitted Date</th>
                <th scope="col">Created Editor</th>
                <th scope="col">Status</th>
                <th scope="col">Approved Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.length > 0 && this.state.posts.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.submittedDate}</td>
                  <td>
                  {item.editors.map((item,index)=>(
                    <p>{item.name}</p>
                  ))}
                  </td>
                  <td>{item.status}</td>
                  <td>{item.approvedDate}</td>
                  <td>{item.remaks}</td>
                

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> Back</button>
      </div>


    )
  }
}
export default postAdView;