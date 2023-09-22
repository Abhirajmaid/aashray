// import { API_URL, STRAPI_API_TOKEN } from "./urls.js";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer db407e3b1b79c45acb4897bbbe6edf7c54c843ebf56721d23b08c061b1673533e2b46f7210644f760bacd08256424fd3797edae4c1f290d8637ce447404e994bb315f1fbafebdc0a717e0df4bce17bca97b71c306e0f2b3b0dba8f8614ea6d1a1027fc166060caff7d4f4685665848dd21a9f23dcae5ac9045fcf93cc9acce8e'
        }
    };

    const res = await fetch(`http://localhost:1337${endpoint}`, options);
    const data = await res.json();
    return data;
};


export const PostDataToApi = async (endpoint, entry) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer db407e3b1b79c45acb4897bbbe6edf7c54c843ebf56721d23b08c061b1673533e2b46f7210644f760bacd08256424fd3797edae4c1f290d8637ce447404e994bb315f1fbafebdc0a717e0df4bce17bca97b71c306e0f2b3b0dba8f8614ea6d1a1027fc166060caff7d4f4685665848dd21a9f23dcae5ac9045fcf93cc9acce8e'
        },
        body: JSON.stringify({ data: entry })
    };
    const res = await fetch(`http://localhost:1337${endpoint}`, options);
};


export const PostUpdate = async (endpoint, entry) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer db407e3b1b79c45acb4897bbbe6edf7c54c843ebf56721d23b08c061b1673533e2b46f7210644f760bacd08256424fd3797edae4c1f290d8637ce447404e994bb315f1fbafebdc0a717e0df4bce17bca97b71c306e0f2b3b0dba8f8614ea6d1a1027fc166060caff7d4f4685665848dd21a9f23dcae5ac9045fcf93cc9acce8e'
        },
        body: JSON.stringify({ data: entry })
    };
    const res = await fetch(`http://localhost:1337${endpoint}`, options);
};