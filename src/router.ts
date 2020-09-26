import PageImport from "page/import";
import PageExport from "page/export";
import ReportImportDetails from "page/import/ReportImportDetails";
import ReportExportDetails from "page/export/ReportExportDetails";
import PageCustomer from "page/customer";
import Page404 from "page/Page404";
import {MiddlewareRouteProps} from "components/MiddlewareRoute";
import PageComponent from "./page/test";
import ProductPage from "./page/product";
import GoodReceivedPage from "./page/goods_received";
import PurchaseOrderPage from "./page/purchase_order";
import LoginPage from "./page/auth/loginPage";
import CartView from "./page/test/CartView";
import TableColumn from "./page/test/TableColumn";
import TableApi from "./page/test/TableApi";

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
        path: '/product',
        component: ProductPage,
        middlewares: [
            MiddlewareToken
        ]
    },
    {
        path: '/goods-received',
        component: GoodReceivedPage,
        middlewares: [
            MiddlewareToken
        ]
    },
    {
        path: '/purchase_order',
        component: PurchaseOrderPage,
        middlewares: [
            MiddlewareToken
        ]
    },
    {
        path: "/test",
        component: PageComponent,
        middlewares: []
    },
    {
        path: "/TableApi",
        component: TableApi,
        middlewares: []
    },
    {
        path: "/TableColumn",
        component: TableColumn,
        middlewares: []
    },
    {
        path: "/chart",
        component: CartView,
        middlewares: []
    },
    {
        path: "/login",
        component: LoginPage,
        middlewares: []
    },
    {
        path: '*',
        component: Page404
    }
];