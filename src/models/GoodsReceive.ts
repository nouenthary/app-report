import {Identity} from "./Identity";
import {Auditor} from "./Auditor";

export interface GoodsReceive extends Identity, Auditor {
    purchase_number?: string;
    goods_receive_number?: string;
    invoice_number?: string;
    date?: string;
    amount?: string;
    credit?: string;
    supplier?: string;
    phone?: string;
    branch?: string;
}