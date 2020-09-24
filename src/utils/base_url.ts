import {Method} from "axios";

const url_v1 = 'https://api-clinic.cubetiqs.com/v1/TNA-00013067';
// const v2 = 'https://inventory-dev-api.cubetiqs.com/v1/TNA-00160111';
const BASE_URL_API: string | undefined = process.env.REACT_APP_BASE_URL;
const API_VERSION: string = '/v1';
const TENANT_ID: string = '/TNA-00013067';

const base_url: string = BASE_URL_API + API_VERSION + TENANT_ID;

export const url = process.env.REACT_APP_LOCAL;

const bearer: string = 'Bearer ';

export const token: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN1YmV0aXEta2V5LWlkIn0.eyJ0ZW5hbnRfbmFtZSI6IkNMSU5JQyBTT0xVVElPTiIsImFjY2Vzc190ZW5hbnRfaWQiOiJUTkEtMDAwMTMwNjciLCJ1c2VyX25hbWUiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1ZGl0b3IiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwiY2xpZW50X2lkIjoiY3ViZXRpcS1jbGluaWMtZGV2IiwiYXVkIjpbImN1YmV0aXEtY2xpbmljLWRldiIsImN1YmV0aXEtb2F1dGgiXSwidXNlcl9pZCI6ImM1YzcyYTY1LWM3ZWItNGY3ZC1iN2IxLWJjOWVlNTliMmIwMCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhY2Nlc3NfdGVuYW50X25hbWUiOiJDTElOSUMgU09MVVRJT04iLCJleHAiOjE2MDE1MzU5NjEsImp0aSI6ImJhYWU1MmQ3LTM3ODgtNDg2OS1iYjM0LTlkM2JiNGVkNmI5YyIsInRlbmFudCI6IlROQS0wMDAxMzA2NyIsInVzZXJuYW1lIjoiY3ViZXRpcSJ9.VFMfBttbhe3SCwzuBxXeiWBsovaexJLhs-huwaECTnHw3XRE7p-Q0CT3t2shLZLPaHFEB6B9_BtUXM_I10ckdQHM2Udojtr3AZLkPU4snuAAZAyGRh-b3eFg5aM7QqphOsBFULiCyumJWA5Vq5PpChpblGGw4c1sFEyjy46f3H1uk0BK4awL-92lgqxpNiq5SLP5jWwYZ0Kq67iFD-dCmXQF9mf76dKbu9vWoH0ViaBvnFwT2uN4fPOwiKLZg6UZR080LZ6cRGTNJdmkeT6Uw5QksZ2Rz-kfjvMv1gnDyFSsSFLtEii044R7ckOBrfZKE9Xcwc0nvhl3DJWcwRvGAA'

export const fetchApi = (url: string, method: Method) => {
    console.log("currentUrl ", base_url)
    return fetch(url_v1 + url, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": bearer + (token ? token : (sessionStorage.getItem('token'))),
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://clinic.cubetiqs.com/customers",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": method,
        "mode": "cors"
    });
}