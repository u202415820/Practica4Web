export class Attention {
    constructor({
                    id = null,
                    firstName = '',
                    lastName = '',
                    branchId = '',
                    ticketIdentifier = '',
                    registerInAt = ''
                }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.branchId = branchId;
        this.ticketIdentifier = ticketIdentifier;
        this.registerInAt = registerInAt;
    }
}