# Discordexchange.js
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3568134c4747441ea339dab9f04020e2)](https://app.codacy.com/app/cfan/discordexchange.js?utm_source=github.com&utm_medium=referral&utm_content=cfanoulis/discordexchange.js&utm_campaign=Badge_Grade_Settings)
[![Known Vulnerabilities](https://snyk.io/test/github/cfanoulis/discordexchange.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/cfanoulis/discordexchange.js?targetFile=package.json)

The nodeJS API client for Discord.Exchange

**BUILD-TOOLS ARE REQUIRED!**

## PLEASE READ THIS!!
The alpha has **not opened yet**. PLease await for more info soon:tm:

## Usage

### Client initialisation
You first need to initialise our little client. You need your API token and your bot's ID.

The following code would initialise a command with a bot ID of `1234567890` and a token of `PlsRyGimmeSumOwO`
```
const exchangeapi = require(discordexchange);
const ExchangeClient = new exchangeapi.ExchangeClient(PlsRyGimmeSumOwO, 1234567890);
```

### Client authentication
Now you need to authenticate your client. This is only done once per session:

```
ExchangeClient.authenticate();
```

When your credentials are accepted by our server, an `AuthSuccessful` event will fire. You can catch it by using an event handler

```
ExchangeClient.on("AuthSuccessfull, function () {
    console.log("UwU we just logged in!")
});
```

If your credentials are not accepted, an `AuthUnsuccessful` event will fire.

```
ExchangeClient.on("AuthUnsuccessfull, function (err) {
    console.log("YEET! Our credentials were denied! Pls send help. The server said: " + err)
});
```
