module.exports = function (ws, token, botID, timeout = 20000) {
    return new Promise( (resolve, reject) => {
            const toSend = {
                "op": 1,
                "d": {
                    "token": token,
                    "botID": botID
                }
            };
            ws.send(JSON.stringify(toSend));
            const timeoutTimer = setTimeout(() => {
                reject("Timed out");
            }, timeout);

            ws.on("message", function(data) {
                const received = JSON.parse(data);
                if (received.op == 1 && received.data.success == true){
                    clearTimeout(timeoutTimer);
                    return resolve(received.d);
                }
            });
        }
    );
};