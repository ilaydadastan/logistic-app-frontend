import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {ShipmentRequest} from "../type/shipment-request";
import ShipmentClient from "../services/shipment.client";

const CreateShipment = () => {
        const [shipmentRequest, setShipmentRequest] = useState<ShipmentRequest>({} as ShipmentRequest);

        const saveShipmentHandle = () => {
                ShipmentClient.createShipment(shipmentRequest).then((res: ShipmentRequest) => {
                        //TODO create alert
                });
        }

        const handleInputChange = (event: any) => {
                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                setShipmentRequest({
                        ...shipmentRequest,
                        [name]: value
                });
        }

        return <div>
                <form className="row col-lg-8 p-lg-5">
                        <span className="fs-2 text">Sender Information</span>

                        <div className="col-md-6">
                                <label htmlFor="senderFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" name="senderFirstName"
                                       value={shipmentRequest.senderFirstName} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6">
                                <label htmlFor="senderLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="senderLastName"
                                       value={shipmentRequest.senderLastName} onChange={handleInputChange}/>
                        </div>

                        <div className="col-8">
                                <label htmlFor="senderEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" name="senderEmail"
                                       placeholder="Email" value={shipmentRequest.senderEmail}
                                       onChange={handleInputChange}/>
                        </div>

                        <div className="col-12">
                                <label htmlFor="senderAddress" className="form-label">Address</label>
                                <textarea className="form-control" name="senderAddress"
                                          placeholder="Apartment, studio, or floor"
                                          value={shipmentRequest.senderAddress} onChange={handleInputChange}/>
                        </div>


                        <span className="fs-2 text mt-5">Recipient Information</span>


                        <div className="col-md-6">
                                <label htmlFor="recipientFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" name="recipientFirstName"
                                       value={shipmentRequest.recipientFirstName} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6">
                                <label htmlFor="recipientLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="recipientLastName"
                                       value={shipmentRequest.recipientLastName} onChange={handleInputChange}/>
                        </div>

                        <div className="col-8">
                                <label htmlFor="recipientEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" name="recipientEmail"
                                       placeholder="Email" value={shipmentRequest.recipientEmail}
                                       onChange={handleInputChange}/>
                        </div>

                        <div className="col-12">
                                <label htmlFor="recipientAddress" className="form-label">Address</label>
                                <textarea className="form-control" name="recipientAddress"
                                          placeholder="Apartment, studio, or floor"
                                          value={shipmentRequest.recipientAddress} onChange={handleInputChange}/>
                        </div>


                        <span className="fs-2 text mt-5">Content</span>

                        <div className="col-8">
                                <label htmlFor="content" className="form-label">Content</label>
                                <input type="text" className="form-control" name="content"
                                       placeholder="Content" value={shipmentRequest.content}
                                       onChange={handleInputChange}/>
                        </div>


                        <div className="col-12 mt-5">
                                <button type="button" className="btn btn-primary" onClick={saveShipmentHandle}>Create
                                        Shipment
                                </button>
                        </div>
                </form>


        </div>

}

export default CreateShipment;
