import { API_URL, STRAPI_API_TOKEN } from "./urls.js";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer b4e8678c7ed32e303aa3672107f93a19264ce0c1b72dac5c7fe790ff52656e82688f2d96dc56b126321d0ba2bc0a433a6bebf0e1827ee2da92f5fe1455732d24a3fa27080c154a6231525a11f970d8d695d813400afab728790c454139c16c5f03d7d123bd20cf7a089de83533fce0d2d62bd31afedb9d22becf2661e7cc11d5'
        }
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    // console.log(data);
    return data;
};


export const authDataToApi = async (formData) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    };
    const res = await fetch("http://localhost:1337/api/auth/local/register", options);
    const data = await res.json();
    return data;
}