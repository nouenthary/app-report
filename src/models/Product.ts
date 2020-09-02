import {Auditor} from "./Auditor";
import {Identity} from "./Identity";

export interface Product extends Identity, Auditor {
    product_code?: number;
    name?: string;
    category?: string;
    product_type?: string;
    tax?: string;
}