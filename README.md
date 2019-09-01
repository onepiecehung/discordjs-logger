<div align="center">
  <p>
    <a href="https://nodei.co/npm/discordjs-logger
/"><img src="https://nodei.co/npm/discordjs-logger.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>  

# Discord.js logger = > consolog
```css
Discord all events!
A quick and dirty fleshing out of the discord.js event listeners  (not tested at all!)
listed here -> https://discord.js.org/#/docs/main/stable/class/Client
Learn from this, do not just copy it mofo!
Saved to -> https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584
```

```npm
npm i discordjs-logger
```

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const logger = require('discordjs-logger');

//just call API
logger.all()
```

# API


// channelCreate
Emitted whenever a channel is created.
|PARAMETER |   TYPE   |     DESCRIPTION|
|channel   |   Channel   |  The channel that was created|

