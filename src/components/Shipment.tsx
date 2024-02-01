import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Shipment = () => {


        return <div>
                <form className="row col-lg-8 p-lg-5">
                        <span className="fs-2 text">Sender Information</span>

                        <div className="col-md-6">
                                <label htmlFor="senderFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="senderFirstName"/>
                        </div>
                        <div className="col-md-6">
                                <label htmlFor="senderLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="senderLastName"/>
                        </div>

                        <div className="col-8">
                                <label htmlFor="senderEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="senderEmail"
                                       placeholder="Email"/>
                        </div>

                        <div className="col-12">
                                <label htmlFor="senderAddress" className="form-label">Address</label>
                                <textarea className="form-control" id="senderAddress"
                                          placeholder="Apartment, studio, or floor"/>
                        </div>


                        <span className="fs-2 text mt-5">Recipient Information</span>


                        <div className="col-md-6">
                                <label htmlFor="recipientFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="recipientFirstName"/>
                        </div>
                        <div className="col-md-6">
                                <label htmlFor="recipientLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="recipientLastName"/>
                        </div>

                        <div className="col-8">
                                <label htmlFor="recipientEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="recipientEmail"
                                       placeholder="Email"/>
                        </div>

                        <div className="col-12">
                                <label htmlFor="recipientAddress" className="form-label">Address</label>
                                <textarea className="form-control" id="recipientAddress"
                                          placeholder="Apartment, studio, or floor"/>
                        </div>


                        <span className="fs-2 text mt-5">Content</span>

                        <div className="col-8">
                                <label htmlFor="content" className="form-label">Content</label>
                                <input type="text" className="form-control" id="content"
                                       placeholder="Content"/>
                        </div>


                        <div className="col-12 mt-5">
                                <button type="submit" className="btn btn-primary">Create Shipment</button>
                        </div>
                </form>


        </div>

}

export default Shipment;
