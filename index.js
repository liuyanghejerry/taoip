var http = require('http');
var url = require('url');
var api_template = {
  protocol: 'http:',
  hostname: 'ip.taobao.com',
  query: {'ip': '127.0.0.1'},
  pathname: '/service/getIpInfo.php'
};

function queryIpv4Str (str, cb) {
  api_template.query = {'ip': str};
  http.get(url.format(api_template), function(res) {
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    }).on('end', function() {
      var result = JSON.parse(body || '{}');
      if (!!cb && typeof cb === 'function') {
        process.nextTick(cb.bind(undefined, result));
      }
    });
  }).on('error', function(e) {
    throw e;
  });
}

module.exports = {
  // as for now, taobao only supports ipv4
  'queryIpv4Str': queryIpv4Str,
  // shortcut
  'query': queryIpv4Str
};