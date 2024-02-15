import axios from "axios";
import {ShipmentRequest} from "../type/shipment-request";
import {UUID} from "node:crypto";
import {Shipment} from "../models/shipment";

class ShipmentClient {
    createShipment = (shipmentRequest: ShipmentRequest): Promise<ShipmentRequest> => {
        return axios.post("shipments", shipmentRequest, {headers: {'Content-Type': 'application/json'}}).then();
    };

    getShipment = (trackingId: UUID | undefined): Promise<Shipment> => {
        return axios.get(`shipments/${trackingId}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error fetching shipment:', error);
                throw error;
            });
    };
}

export default new ShipmentClient();