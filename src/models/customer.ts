import {Shipment} from "./shipment";

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    sentShipmentList: Shipment[];
    receivedShipmentList: Shipment[];
}