import axios from 'axios';

const bbvaApi = import.meta.env.VITE_BBVA_API_URL;

export class BaseApi {
    #http;

    constructor() {
        this.#http = axios.create({
            baseURL: bbvaApi,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    get http() {
        return this.#http;
    }
}
