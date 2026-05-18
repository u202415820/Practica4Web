import { Attention } from '../domain/model/attention.entity.js';

export class AttentionAssembler {
    static toEntityFromResource(resource) {
        return new Attention({ ...resource });
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`Error: ${response.status}`);
            return [];
        }
        const resources = response.data instanceof Array
            ? response.data
            : response.data['attentions'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}