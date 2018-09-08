# Discordexchange.js
[![npm version](https://badge.fury.io/js/discordexchange.svg)](https://badge.fury.io/js/discordexchange)
[![Dependency Status](https://david-dm.org/discordexchange/discordexchange.js.svg)](https://david-dm.org/discordexchange/discordexchange.js)
[![CircleCI](https://img.shields.io/circleci/project/github/DiscordExchange/discordexchange.js.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAFAAAABQBXIyBfAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAETSURBVCiRlZLPKkVRGMV/+yQTKXfkBdw8gu6AjAyQMvMYklLcugZSRgYyIyYyMpNkRhkwMZTyBLrcGPhzo5+BfWp3nKOs4W6ttde3vg8SqMPqlnqnvqnP6rXaVGuUQV1Su1bjUZ0qitb+EKT4VKcBgjoKnAMh+nSBA+ACqAEzwHjyTweoo54mju/qWCFNiDOmWA3qLtAfeSchhH11EFgB2sBGTHEJNCLvpqqow8R9ISkvx0tWqixHyrVH3QP64sNZCGEHmAceYtRtNQNmE+E96nES4UOdKMTO1PVCOa2gNuLg+Tq+gCN+VtQLzAEjidcTUM9dW/84gF/XsxijVqGtTpbWpg6pm+qt+qp21Ct1WR1Iud9rHH2qChMm7QAAAABJRU5ErkJggg==)](https://circleci.com/gh/DiscordExchange/discordexchange.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3568134c4747441ea339dab9f04020e2)](https://app.codacy.com/app/cfan/discordexchange.js?utm_source=github.com&utm_medium=referral&utm_content=cfanoulis/discordexchange.js&utm_campaign=Badge_Grade_Settings)
[![Known Vulnerabilities](https://snyk.io/test/github/discordexchange/discordexchange.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/discordexchange/discordexchange.js?targetFile=package.json)
[![Greenkeeper badge](https://badges.greenkeeper.io/discordexchange/discordexchange.js.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDiscordExchange%2Fdiscordexchange.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FDiscordExchange%2Fdiscordexchange.js?ref=badge_shield)

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

The function is promisfied, so you should use it as such:

```
ExchangeClient.authenticate().then("Oh hello!").catch("Sad boyes we were not authenticated");
```

Upon authenticated, the `.then` clause will fire. If you are not authenticated, the `.catch` clause will fire.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDiscordExchange%2Fdiscordexchange.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FDiscordExchange%2Fdiscordexchange.js?ref=badge_large)