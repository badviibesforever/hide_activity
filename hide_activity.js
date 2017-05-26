var SteamUser = require('steam-user');

var client = new SteamUser();
var cfg = require('./config.js');

var logOnOptions = {
    accountName: cfg.username,
    password: cfg.password,
};
if (cfg.username && cfg.password) {
  client.logOn(logOnOptions);

  client.on('loggedOn', () => {
    client.setPersona(1);
    client.gamesPlayed([399220, 399080, 399480]);
    console.log(' >> Success!');
    console.log('');
    console.log(' |                                                                    |');
    console.log(' |                                                                    |');
    console.log(' |      Made by Jafix                                                 |');
    console.log(' |      http://steamcommunity.com/profiles/76561198259000054          |');
    console.log(' |                                                                    |');
    console.log(' |      Creator of several steambots                                  |');
    console.log(' |      http://steamcommunity.com/groups/jafixbot                     |');
    console.log(' |                                                                    |');
    console.log(' |                                                                    |');
    console.log(' |                                                                    |');

  });
} else {
  console.log(' >> Don\'t forgot to fill in you username & password in de config.js file!');
}
