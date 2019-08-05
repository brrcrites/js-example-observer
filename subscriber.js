
export default class Subscriber {

    constructor(id, name) {
        this.name = name;
        this.id = id;
    }

    send(msg) {
        console.log(`The subscriber ${this.name } has recieved the message \"${msg}\"`);
    }
}
