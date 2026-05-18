import { Branch } from '../domain/model/branch.entity.js';

export class BranchAssembler {
    static toEntityFromResource(resource) {
        return new Branch({ ...resource });
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`Error: ${response.status}`);
            return [];
        }
        const resources = response.data instanceof Array
            ? response.data
            : response.data['branches'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}