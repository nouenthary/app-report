import PageImport from "./page/import";
import PageExport from "./page/export";
import ReportImportDetails from "./page/import/ReportImportDetails";
import ReportExportDetails from "./page/export/ReportExportDetails";
import PageCustomer from "./page/customer";

interface RouterType {
    path: string;
    component: () => JSX.Element
}

export const router: RouterType[] = [
    {
        path: '/',
        component: PageImport
    },
    {
        path: '/export',
        component: PageExport
    },
    {
        path: '/reportImportDetails/:id',
        component: ReportImportDetails
    },
    {
        path: '/ReportExportDetails/:id',
        component: ReportExportDetails
    },
    {
        path: '/customer',
        component: PageCustomer
    }
];