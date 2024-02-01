import {ShipmentStatus} from "./shipment-status";
import {Customer} from "./customer";

export interface Shipment {
    id: number;
    trackingId: string;
    content: string;
    status: ShipmentStatus;
    senderCustomer: Customer;
    recipientCustomer: Customer;
}