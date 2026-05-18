import { defineStore } from 'pinia';
import { ref } from 'vue';
import { RegistrationApi } from '../infrastructure/registration.api.js';
import { AttentionAssembler } from '../infrastructure/attention.assembler.js';
import { BranchAssembler } from '../infrastructure/branch.assembler.js';

const registrationApi = new RegistrationApi();

export const useRegistrationStore = defineStore('registration', () => {

    const attentions = ref([]);
    const attentionsLoaded = ref(false);
    const branches = ref([]);
    const branchesLoaded = ref(false);
    const errors = ref([]);

    function fetchAttentions() {
        registrationApi.getAttentions()
            .then(response => {
                attentions.value = AttentionAssembler.toEntitiesFromResponse(response);
                attentionsLoaded.value = true;
            })
            .catch(error => { errors.value.push(error); });
    }

    function fetchBranches() {
        registrationApi.getBranches()
            .then(response => {
                branches.value = BranchAssembler.toEntitiesFromResponse(response);
                branchesLoaded.value = true;
            })
            .catch(error => { errors.value.push(error); });
    }

    function getAttentionByTicket(ticket) {
        return attentions.value.find(a => a.ticketIdentifier === ticket);
    }

    function getBranchById(id) {
        return branches.value.find(b => b.id === id);
    }

    function getAttentionsByBranchId(branchId) {
        return attentions.value.filter(a => a.branchId === branchId);
    }

    async function updateAttention(attention) {
        const response = await registrationApi.updateAttention(attention.id, attention);
        const updated = AttentionAssembler.toEntityFromResource(response.data);
        const index = attentions.value.findIndex(a => a.id === updated.id);
        if (index !== -1) attentions.value[index] = updated;
    }

    return {
        attentions, attentionsLoaded,
        branches, branchesLoaded,
        errors,
        fetchAttentions, fetchBranches,
        getAttentionByTicket, getBranchById,
        getAttentionsByBranchId, updateAttention
    };
});
