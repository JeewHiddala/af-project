import React, { Component } from 'react';
import axios from 'axios';

class PostAdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.navigatePostPage = this.navigatePostPage.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:7000/post/')
      .then(response => {
        this.setState({ posts: response.data.data });
        // console.log(posts);
      })
  }

  handleChange = (e)=>{
    this.setState({
      status:e.target.status
    })
}

  navigateApprovePostPage(e, postId) {
    window.location = `/approvepost/${postId}`
}

back(e) {
  window.location = '/otherFacilities'
}

navigatePostPage(e) {
  window.location = '/postAdView'
}

  render() {
    return (
      <div className="container">
        <br/>
        <div className = "row">
            <div className="col-8"><h1>Posts Approval List</h1></div>
            <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.navigatePostPage(e)}>Show Posts</button></div>
            <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> Back</button></div>
        </div><br/>
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
                  <td>{item.remarks}</td>

                  <td><button type="button" className="btn btn-outline-dark" onClick={e => this.navigateApprovePostPage(e, item._id)} >Approval / Declined</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <br/><br/><br/><br/>
        </div>
      </div>
      
    )
  }
}
export default PostAdminView;
