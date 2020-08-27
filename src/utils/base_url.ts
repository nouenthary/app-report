import {Method} from "axios";

const base_url: string = 'https://api-clinic.cubetiqs.com/v1/TNA-00013067';

const bearer: string = 'Bearer ';

export const token: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN1YmV0aXEta2V5LWlkIn0.eyJ0ZW5hbnRfbmFtZSI6IkNMSU5JQyBTT0xVVElPTiIsImFjY2Vzc190ZW5hbnRfaWQiOiJUTkEtMDAwMTMwNjciLCJ1c2VyX25hbWUiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1ZGl0b3IiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiY2xpZW50X2lkIjoiY2xpbmljYWwiLCJhdWQiOlsiY3ViZXRpcS1jbGluaWNhbCIsImN1YmV0aXEtb2F1dGgiXSwidXNlcl9pZCI6ImM1YzcyYTY1LWM3ZWItNGY3ZC1iN2IxLWJjOWVlNTliMmIwMCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhY2Nlc3NfdGVuYW50X25hbWUiOiJDTElOSUMgU09MVVRJT04iLCJleHAiOjE1OTg5NDUzNzIsImp0aSI6IjEzMjRkZmY4LWU1MWYtNDdjYi05NDk3LTc3ODk3Nzc4MjFhOCIsInRlbmFudCI6IlROQS0wMDAxMzA2NyIsInVzZXJuYW1lIjoiY3ViZXRpcSJ9.ALCqoIjGzDx6HmBVdovH74bK5Hg05QRKziZutOXfEQ7QfRC5xz27IZdUrQDT6VYpViATk60DuRp4m7AOSdEKkRi-sKr6LqZSD1t_uyP1IpoQVvEN31190cnrK4Nh5ufW3VwwZt1SqwJUMXBP5j8wRVjUUuTadKV85CZcZrjdypXwll3QtLyCDOxEhnDQ8nlKIoQqMtv7hPVO8sWvjehlSTZcsXn1M4vnlAGdsglc4a72q4S7iAjZV0GFN8cmfJ0hiDw-xZufR4XcSxPPWzeCFiqccLk-kqZHTUfKqxFyE56pwrVfWzk2ydfTWeBhb_ADy9WgmF3GAi7Acl9NyJbvuA'

export const fetchApi = (url: string, method: Method) => {
    return fetch(base_url + url, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": bearer + (sessionStorage.getItem('token') ? sessionStorage.getItem('token') : token),
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