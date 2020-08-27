import PageImport from "./page/import";
import PageExport from "./page/export";
import ReportImportDetails from "./page/import/ReportImportDetails";
import ReportExportDetails from "./page/export/ReportExportDetails";
import PageCustomer from "./page/customer";
import Page404 from "./page/Page404";
import {MiddlewareRouteProps} from "./components/MiddlewareRoute";

interface RouterType extends MiddlewareRouteProps {
    path: string;
    component: any;
}

// const middleware = (component: any) => {
//     console.log(sessionStorage.getItem('token'))
//     return sessionStorage.getItem('token') ? component : Page404
// }

const MiddlewareToken = () => sessionStorage.getItem('token') !== null

// const MiddlewareAsync = (mockResult: boolean) => (): Promise<boolean> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(mockResult)
//         }, 2000)
//     })
// }

export const router: RouterType[] = [
    {
        path: '/',
        component: PageImport,
        middlewares: [
            MiddlewareToken,
        ]
    },
    {
        path: '/export',
        component: PageExport,
        middlewares: [
            MiddlewareToken,
        ]
    },
    {
        path: '/reportImportDetails/:id',
        component: ReportImportDetails,
        middlewares: [
            MiddlewareToken,
        ]
    },
    {
        path: '/ReportExportDetails/:id',
        component: ReportExportDetails,
        middlewares: [
            MiddlewareToken,
        ]
    },
    {
        path: '/customer',
        component: PageCustomer,
        middlewares: [
            MiddlewareToken,
        ]
    },
    {
        path: '*',
        component: Page404
    }
];