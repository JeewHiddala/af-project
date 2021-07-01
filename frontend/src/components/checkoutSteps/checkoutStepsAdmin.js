import './checkoutSteps.css';
import React from 'react';
 
export default function CheckoutStepsAdmin(props){
    return(
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active': ''}><a href="/admin" className="checkouts">Administrator Details List</a></div>
            <div className={props.step2 ? 'active': ''}><a href="/editor" className="checkouts">Editor Details List</a></div>
            <div className={props.step3 ? 'active': ''}><a href="/reviewer" className="checkouts">Reviewer Details List</a></div>
        </div>
    )
}
