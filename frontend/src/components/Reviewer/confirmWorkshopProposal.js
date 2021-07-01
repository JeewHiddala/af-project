import './confirmWorkshopProposal.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import Select from 'react-select';
import axios from 'axios';



const initialState = {
    approvedDate: '',
    status: 'select',
    reviewers: [],
    options1: [],
    options2:[],
    options3: [],
    title: '',
    workshopProposal:[],
    selectedPresenters:[],
    selectedReviewers:[],
    presenter:[]
    
  }

class ConfirmApproveWorkshopProposals extends Component {
  constructor(props) {
    super(props);
          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.onReviewerSelect = this.onReviewerSelect.bind(this);
          this.onPresenterSelect = this.onPresenterSelect.bind(this);
          this.state = initialState;
      }
    


    componentDidMount() {
        axios.get('http://localhost:7000/reviewer/')
        .then(response => {
          this.setState({ reviewers: response.data.data }, () => {
            let data = [];
            this.state.reviewers.map((item, index) => {
              let reviewers = {
                value: item._id,
                label: item.name
              }
              data.push(reviewers)
              console.log( "a"+reviewers);
            });
            this.setState({ options1: data });
          })
        })

        axios.get('http://localhost:7000/presenter/')
        .then(response => {
          this.setState({ presenter: response.data.data }, () => {
            let data = [];
            this.state.presenter.map((item, index) => {
              let presenter = {
                value: item._id,
                label: item.email
              }
              data.push(presenter)
            });
            this.setState({ options2: data });
          })
        })

        const { data } = this.props.location
 
        console.log("userid: "+data);
        axios.get(`http://localhost:7000/workshopProposal/${data}`)
        .then(response => {
        this.setState({workshopProposal: response.data.data});
        this.setState({ title: response.data.data.title });
        console.log( "abc"+response.data.data.title);
        })
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });      
      }
    
      onReviewerSelect(e) {
        this.setState({ selectedReviewers: e ? e.map(item => item.value) : [] });
      }

      onPresenterSelect(e) {
        this.setState({ selectedPresenters: e ? e.map(item => item.value) : [] });
      }
    
      onSubmit(e) {
        e.preventDefault();
        const { data } = this.props.location
 
        console.log("userid: "+data);
        let reviewedWorkshopProposal = {
          workshopProposalId: data,
          approvedDate: this.state.approvedDate,
          presenter: this.state.selectedPresenters,
          reviewers: this.state.selectedReviewers,
          status: this.state.status,
          title: this.state.title
        };
        
        console.log('DATA TO SEND', reviewedWorkshopProposal)
        Swal.fire({
          title: 'Are you sure?',
          text: "You want to approve it!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, approve it!'
      }).then(response => {
        axios.post('http://localhost:7000/approvedWorkshopProposal/create', reviewedWorkshopProposal)

        .then((response) => {
          if(response.data.data.status){
            Swal.fire(
                'Approved!',
                'Workshop Proposal has been appproved.',
                'success'
            )  
          }else if(response.data.data.status){
            Swal.fire(
              'Declined!',
              'Workshop Proposal has been declined.',
              'warning'
              )
            }
          })
        })
        .catch(error => {
          console.log(error.message);
          alert(error.message)
        })
      }


  render(){
       return (
        <div className="container"><br/>
            <div className={"card p-4"}>
            
                <h5 htmlFor="content"  className="form-label mb-4" style={{textAlign:"left"}}>
                    {}
                </h5>

                <form onSubmit={this.onSubmit} onChange={this.onHandle}>
                
                    <div className={"row"}>
                        <div className={"col-md-6"}>

                        <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="title"  className="form-label">Workshop Proposal Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={this.state.title}       
                                />
                            </div>

                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="title"  className="form-label">Approved Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="approvedDate"
                                    name="approvedDate"
                                    value={this.state.approvedDate}
                                    onChange={this.onChange}
                                />
                            </div>
                       
                            <Select 
                                placeholder="Select Presenter Email"
                                options={this.state.options2}
                                onChange={this.onPresenterSelect}
                                className="basic-multi-select"
                                isMulti
                            />

                            <br></br>
                           <Select 
                                placeholder="Select Reviewer Name"
                                options={this.state.options1}
                                onChange={this.onReviewerSelect}
                                className="basic-multi-select"
                                isMulti
                                />
                   
                            <br></br>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="title"  className="form-label">Status</label>
                                <br></br>
                                <select className="mb-3" id="lang" 
                                onChange={this.onChange} 
                                value={this.state.status}
                                name="status">
                                  <option value="select">Select Status </option>
                                  <option value="approved">Approved</option>
                                  <option value="declined">Declined</option>
                                </select>
                            </div>

                            <br></br>
                            <br></br>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                          </div>
                          <br></br>
                        <br></br>
                     <br></br>
                </form>         
             </div>
        </div>
    )
  }                         
}


export default ConfirmApproveWorkshopProposals;