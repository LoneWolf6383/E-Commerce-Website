import axios from "axios";

const base_url = "http://localhost:3000/api/"
const TOKEN = "any user's token"


export const publicRequest = axios.create({
    baseURL:base_url
})

export const userRequest = axios.create({
    baseURL:base_url,
    header:{token:"Bearer"}
})