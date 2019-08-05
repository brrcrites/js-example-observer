
export default class Channel {

    constructor(id, name, subject, subscribers = []) {
        this.name = name;
        this.id = id;
        this.subject = subject;
        this.subscribers = subscribers;
    }

    addSubscriber(sub) {
        let isAdded = false;
        this.subscribers.forEach(subscriber => {
            if(subscriber.id === sub.id) {
                isAdded = true;
                return;
            }
        });
        if (!isAdded) {
            this.subscribers.push(sub);
            return;
        }
    }

    removeSubscriber(sub) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[0].id === sub.id) {
                this.subscribers.splice(i,1);
                return;
            }
        }
    }

    sendMessage(msg) {
        console.log(`The channel ${this.name} is sending the message \"${msg}\" to its ${this.subscribers.length} subscribers`);
        this.subscribers.forEach(subscriber => {
            subscriber.send(msg);
        });
    }

}
