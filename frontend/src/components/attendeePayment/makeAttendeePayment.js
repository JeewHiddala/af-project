import React, { Component } from 'react';
import axios from 'axios';


class AddAttendeePayment extends Component {
    constructor(props) {
        super(props);
        this.readSingleFile = this.readSingleFile.bind(this);
        this.onChange = this.onChange.bind(this);
        this.loadLogin = this.loadLogin.bind(this);

        this.toDashboard = this.toDashboard.bind(this);

        const { data } = this.props.location
        this.state = {
            paymentMethod: '',
            attendeeId: `${data}`,
            paymentSlip: null
        }
    }

    readSingleFile(e) {
        // const name = e.files[0].name;
        // console.log("filename" + name);
        // document.getElementById("file-label").textContent = name;
        // this.state.paymentSlip = name;

        this.setState({ paymentSlip: e.target.files[0] });
    }

    loadLogin(e) {
        window.location = '/login'
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    toDashboard(e, userId) {
        this.props.history.push({
            pathname: '/attendee/dashboard',
            data: `${userId}`
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        let attendeePayment = {
            paymentMethod: this.state.paymentMethod,
            attendeeId: this.state.attendeeId
        }
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "paymentSlip",
            this.state.paymentSlip,
            this.state.paymentSlip.name
        );

        // Details of the uploaded file 
        console.log(this.state.paymentSlip);
        console.log(this.state.paymentMethod);


        // Send formData object 
        axios.post("attendee/pay/store", formData, attendeePayment)
            .then((response) => {
                this.props.history.push({
                    pathname: '/attendee/dashboard',
                    data: response.data.data
                })
                console.log("userid reg: " + response.data.data);

                alert('Payment inserted')
            })
            .catch((error) => {
                alert('Payment not inserted')
            })

    }

    render() {
        const { data } = this.props.location
        console.log("userid: " + data);
        if (data) {
            return (
                <div className="container">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary me-md-2" onClick={e => this.toDashboard(e, data)} >Dashboard</button>
                    </div>
                    <h2>Make Payment</h2>
                    <form onSubmit={e => this.onFormSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            <input type="text" className="form-control" name="paymentMethod" onChange={e => this.onChange(e)} value={this.state.paymentMethod} />
                        </div>
                        <div className="mb-3">
                            <label className="custom-file-label" htmlFor="file1" id="file-label">Upload Payment Slip   : </label>
                            <input type="file" className="custom-file-input" name="paymentSlip" id="file1" onChange={e => this.readSingleFile(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <br /><br /><br /><br />
                    </form>

                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2>Please login to continue</h2>
                    <br /><br /><br /><br />
                    <button type="button" className="btn btn-primary" onClick={e => this.loadLogin(e)} >Login</button>
                    <br /><br /><br /><br />
                </div>
            )
        }
    }
}

export default AddAttendeePayment;