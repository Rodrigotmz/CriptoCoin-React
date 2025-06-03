export const req_axios = (ids) => {
    const params = {
        apiKey: import.meta.env.VITE_API_KEY,
    }
    if(ids != ''){
        params.ids = ids;
    }

    const request = {
        baseURL: import.meta.env.VITE_API_URL,
        url: 'assets',
        method: 'get',
        params,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
    }
    return request;
}
