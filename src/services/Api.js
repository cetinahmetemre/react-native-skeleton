import Axios from "axios";

const API_URL = "http://localhost:5100";

const buildRequestForApi = (endpoint, method, requestObj, headers = {"Content-Type": "application/json"}) => {
    return {
        url: `${API_URL}${endpoint}`,
        method: method,
        headers: {
            ...headers
        },
        data: {
            ...requestObj
        }
    };
};

export const defaultApi = (endpoint, method, requestObj = "") =>{
    return Axios(buildRequestForApi(endpoint, method, requestObj, {"Content-Type": "application/json"}));
};

export const apiForm = (endpoint, method, requestObj = "") =>{
    return Axios(buildRequestForApi(endpoint, method, requestObj, {"Content-Type": "multipart/form-data"}));
};


