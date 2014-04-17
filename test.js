var taoip = require('./index.js');

taoip.queryIpv4Str('1.2.3.4', console.log.bind(console));
taoip.query('1.2.3.4', console.log.bind(console));

