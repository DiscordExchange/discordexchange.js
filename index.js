const websocket = require("ws");
exports.exchangeClient = async function (token) {
    const ws = new websocket("https://gateway.discord.exchange");
    this.token = token;
    this.authenticate = function (token){
        const tokenObject = {
            "op": 1,
            "d": {
                "token": token
            }
        };
        const data = JSON.stringify(tokenObject);
        ws.send(data, function (err) {
            if (err) throw err;
        });
    };
};