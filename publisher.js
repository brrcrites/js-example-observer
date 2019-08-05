
export default class Publisher {

    constructor(id, name, channels = []) {
        this.name = name;
        this.id = id;
        this.channels = channels
    }

    addChannel(chan) {
        let isAdded = false;
        this.channels.forEach(channel => {
            if (channel.id === chan.id) {
                isAdded = true;
            }
        });
        if (!isAdded) {
            this.channels.push(chan);
        }
    }

    removeChannel(chan) {
        for (let i = 0; i < this.channels.length; i++) {
            if (this.channels[i].id === chan.id) {
                this.channels.splice(i,1);
                return;
            }
        }
    }

    broadcast(msg) {
        console.log(`The publisher ${this.name} is performing a full boradcast to its ${this.channels.length} attached channels`);
        this.channels.forEach(channel => {
            channel.sendMessage(msg);
        });
    }

    broadcastBySubject(subject, msg) {
        console.log(`The publisher ${this.name} is performing a subject broadcast to its ${this.channels.length} attached channels with the subject \"${subject}\"`);
        this.channels.forEach(channel => {
            if (channel.subject === subject) {
                channel.sendMessage(msg);
            }
        });
    }
}
