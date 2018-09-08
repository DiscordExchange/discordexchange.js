const websocket = require("ws");
const EventEmitter = require("events");

//Load events
const auth = require("./functions/auth");

const ws = new websocket("https://gateway.discord.exchange");
var currencies; //eslint-disable-line
class ExchangeClient extends EventEmitter {
    constructor(token, botID) {
        super();
        this.token = token;
        this.botID = botID;
    }
    authenticate() {
        return new Promise ( (resolve, reject) => {
            auth(ws, this.token, this.botID)
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        
    }
    initiateTransaction(user, recipient, amout) { //eslint-disable-line no-unused-vars

    }
}

module.exports = ExchangeClient;