const req_axios = (ids) => {
    const params = {
        apiKey: import.meta.env.VITE_API_KEY,
    }
    if (ids != '') {
        params.ids = ids;
    }

    const request = {
        url: `${import.meta.env.VITE_API_URL}assets`,
        method: 'get',
        params,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
    }
    return request;
}

const postAxios = (user) => {
    const raw = JSON.stringify(user);
    const request = {
        baseURL: 'https://reqres.in/',
        url: 'api/login',
        method: 'post',
        data: raw,
        headers: {
            'x-api-key': 'reqres-free-v1',
            "Content-Type": "application/json"
        },
        responseType: 'json'
    }
    return request
}

export { req_axios, postAxios }
