
import Channel from './channel.js';
import Publisher from './publisher.js';
import Subscriber from './subscriber.js';

let id = 0

let sub1 = new Subscriber(id++, 'subscriber-1');
let sub2 = new Subscriber(id++, 'subscriber-2');
let sub3 = new Subscriber(id++, 'subscriber-3');
let sub4 = new Subscriber(id++, 'subscriber-4');

let science_chan = new Channel(id++, 'science', 'science', [sub1, sub2] );
let tech_chan = new Channel(id++, 'technology', 'technology', [sub3, sub4] );
let eng_chan = new Channel(id++, 'engineering', 'engineeering', [sub1, sub4] );
let math_chan = new Channel(id++, 'math', 'math', [sub2, sub4] );

let stPublisher = new Publisher( id++, 'science-tech-publisher', [science_chan, tech_chan] );
let emPublisher = new Publisher( id++, 'engineering-match-publisher', [eng_chan, math_chan] );
let stemPublisher = new Publisher( id++, 'stem-publisher', [science_chan, tech_chan, eng_chan, math_chan] );

console.log('Full Broadcast by Science+Tech Publisher to all channels');
console.log('------------------------------------------------------------');
stPublisher.broadcast('a science message');
console.log();

console.log('Subject Broadcast by Science+Tech Publisher to all channels with \"science\" subject');
console.log('------------------------------------------------------------');
stPublisher.broadcastBySubject('science', 'a science message');
console.log();

console.log("Complete")
