import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json"
  }
});

export const makeGet = (...params) => httpClient.get(...params);
export const makePost = (...params) => httpClient.post(...params);
export const makeDelete = (...params) => httpClient.delete(...params);