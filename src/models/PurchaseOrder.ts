import {Identity} from "./Identity";
import {Auditor} from "./Auditor";

export interface PurchaseOrder extends Identity, Auditor {
    date?: string;
    type?: string;
    purchase_number?: string;
    supplier?: string;
    phone_number?: string;
    staff?: string;
}