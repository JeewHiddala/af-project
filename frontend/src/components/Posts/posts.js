import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
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

  deletePost(e, postId) {
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
        <center>
        <h1>Posts View</h1>
        </center>
        <div className="col-4"><button type="button" className="btn btn-outline-primary"><a href="/create-post">Create Post</a></button></div>

        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Submitted Date</th>
                <th scope="col">Create Editor</th>
                <th scope="col">Status</th>
                <th scope="col">Review</th>
                <th scope="col">Review Date</th>
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
                  {item.editors.map((item, index) => (
                    <p>{item.name}</p>
                  ))}
                </td>
                 
                  <td>{item.status}</td>
                  <td>{item.approvedAdmin}</td>
                  <td>{item.approvedDate}</td>
                  <td>{item.remarks}</td>


                  <td><button type="button" className="btn btn-outline-warning" onClick={e => this.navigateEditPostPage(e, item._id)} >Edit</button></td>
                  <td><button type="button" className="btn btn-outline-danger" onClick={e => this.deletePost(e, item._id)} >Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


    )
  }
}
export default Posts;