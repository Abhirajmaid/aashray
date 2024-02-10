// import { API_URL, STRAPI_API_TOKEN } from "./urls.js";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer  ac42d67fe55bf324060d44f6a4541c8940186c14a8ace988b0634465dfceb40bf8520e9c64cda7b71157ae29ab2f29d1098307310561445cadd5ccc1e4fe517544886ff942170a2cb2264c7ce43ccfeb31b9b7d62d39d5b518078d265e99271f3ccc5a4a14a8f9e2d998496ed6e4437b0f05646f792f659ac43503a8118a13a0'
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
            Authorization: 'Bearer  ac42d67fe55bf324060d44f6a4541c8940186c14a8ace988b0634465dfceb40bf8520e9c64cda7b71157ae29ab2f29d1098307310561445cadd5ccc1e4fe517544886ff942170a2cb2264c7ce43ccfeb31b9b7d62d39d5b518078d265e99271f3ccc5a4a14a8f9e2d998496ed6e4437b0f05646f792f659ac43503a8118a13a0'
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
            Authorization: 'Bearer  ac42d67fe55bf324060d44f6a4541c8940186c14a8ace988b0634465dfceb40bf8520e9c64cda7b71157ae29ab2f29d1098307310561445cadd5ccc1e4fe517544886ff942170a2cb2264c7ce43ccfeb31b9b7d62d39d5b518078d265e99271f3ccc5a4a14a8f9e2d998496ed6e4437b0f05646f792f659ac43503a8118a13a0'
        },
        body: JSON.stringify({ data: entry })
    };
    const res = await fetch(`http://localhost:1337${endpoint}`, options);
};