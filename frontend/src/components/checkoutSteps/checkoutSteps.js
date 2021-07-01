import './checkoutSteps.css';
import React from 'react';

export default function CheckoutSteps(props){
    return(
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active': ''}><a href="/workshop" className="checkouts">Workshop Proposals</a></div>
            <div className={props.step2 ? 'active': ''}><a href="/paperupload" className="checkouts">Research Paper Uploads</a></div>
            <div className={props.step2 ? 'active': ''}><a href="/attendeeView" className="checkouts">Attendee Details</a></div>
            <div className={props.step3 ? 'active': ''}><a href="/profile" className="checkouts">Edit Profile</a></div>
        </div>
    )
}


        
        
