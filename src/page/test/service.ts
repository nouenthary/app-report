export const BASE_URL = 'http://192.168.0.57:3000'

export const FETCH_DATA_API = (url: any) => {
    return fetch(`${BASE_URL}${url}`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    }).then(response => response.json())
        .catch(err => console.log(err));
}