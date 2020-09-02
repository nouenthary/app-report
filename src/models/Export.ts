import {Identity} from "./Identity";
import {Auditor} from "./Auditor";

export interface Export extends Identity, Auditor {
    date?: string;
    amount?: string;
    type?: string;
}