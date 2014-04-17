taoip
=====

Simple wrapper around http://ip.taobao.com

## HOWTO

```javascript
var taoip = require('taoip');

taoip.query('1.2.3.4', console.log.bind(console));
```

Which would print out the result, as format in the page http://ip.taobao.com/instructions.php

## NOTE

The API published by ip.taobao.com is limited under 10qps.

## LICENSE

MIT license, detailed at LICENSE file.
