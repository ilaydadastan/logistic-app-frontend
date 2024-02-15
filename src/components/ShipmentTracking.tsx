import React, {useState} from "react";
import {UUID} from "node:crypto";
import ShipmentClient from "../services/shipment.client";
import {Shipment} from "../models/shipment";

const ShipmentTracking = () => {

    const [trackingId, setTrackingId] = useState<UUID>();
    const [shipmentData, setShipmentData] = useState<Shipment | null>(null);

    const getShipment = () => {
        ShipmentClient.getShipment(trackingId).then((res: Shipment) => {
            setShipmentData(res);
        });
    }

    const handleTrackingIdChange = (event: any) => {
        const target = event.target;
        setTrackingId(target.value);
    }


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input onChange={handleTrackingIdChange} type="text" className="form-control"
                               placeholder="Please enter your tracking number"/>
                        <button onClick={getShipment} className="btn btn-primary" type="button">Track Your Shipment
                        </button>
                    </div>
                </div>
            </div>
            {
                shipmentData &&
                <div>
                    <p>Tracking ID: {shipmentData.trackingId}</p>
                    <p>Content: {shipmentData.content}</p>
                    <p>Shipment Status: {shipmentData.status}</p>
                    <p>Shipment Recipient Customer: {shipmentData.recipientCustomer.firstName}</p>
                    <p>Shipment Sender Customer: {shipmentData.senderCustomer.firstName}</p>
                </div>
            }

        </div>
    );
}

export default ShipmentTracking;