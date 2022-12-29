import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.manoapp.com/api/v1/",
    headers: {
        // should be in .env file in real project
        "Authorization": " f44a4aabfc5992514d262d7f517327e7",
        "Content-Type": "application/json",
        "StoreId": "4",
        "UserAddressId": "60877",
    }
});

export const getReq = async (url, params) => {
    return await instance.get(url, { params });
};

export default instance;