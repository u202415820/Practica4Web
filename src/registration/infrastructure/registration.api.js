import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const branchesEndpointPath = import.meta.env.VITE_BRANCHES_ENDPOINT_PATH;
const attentionsEndpointPath     = import.meta.env.VITE_ATTENTIONS_ENDPOINT_PATH;

export class RegistrationApi extends BaseApi {

    #branchesEndpoint;

    #attentionsEndpoint;

    constructor() {
        super();
        this.#branchesEndpoint = new BaseEndpoint(this, branchesEndpointPath);
        this.#attentionsEndpoint = new BaseEndpoint(this, attentionsEndpointPath);
    }

    getBranches() {
        return this.#branchesEndpoint.getAll();
    }

    getAttentions() {
        return this.#attentionsEndpoint.getAll();
    }

    updateAttention(id, resource) {
        return this.#attentionsEndpoint.update(id, resource);
    }
}