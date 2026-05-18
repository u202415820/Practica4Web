export class Branch {
    constructor({
                    id = null,
                    name = '',
                    description = '',
                    adress = '',
                    capacity = '',
                    openedAt = ''
                }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.adress = adress;
        this.capacity = capacity;
        this.openedAt = openedAt;
    }
}