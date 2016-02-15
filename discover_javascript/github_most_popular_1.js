var https = require('https');

var options = {
    hostname: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
        'User-Agent': 'Holberton_School',
        'Authorization': 'token ' + process.env.TOKEN
    }
};

var req = https.get(options, function(res) {
    console.log(res.statusCode);
    res.on('data', function(d) {
        process.stdout.write(d);
    });
});

req.on('error', function(e) {
    console.error(e);
});