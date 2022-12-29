import { getReq } from "./axios.config";

const url = "users/products/whats_new";

export const getProducts = async () => {
    const res = await getReq(url);
    return res.data;
}