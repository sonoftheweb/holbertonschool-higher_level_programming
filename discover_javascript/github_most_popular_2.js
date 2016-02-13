var https = require('https');

var options = {
    hostname: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
        'User-Agent': 'Holberton_School',
        'Authorization': 'token dd703610c39c15fb1a3731f772b1700b9bef7b74'
    }
};

var req = https.get(options, function (res) {
    const chunks = [];
    var jsonString = '';
    res.on('data', (chunk) => {
        chunks.push(chunk);
    });
    res.on('end', () => {
        jsonString = chunks.join('');
        console.log(typeof jsonString);
        console.log(jsonString);
    });
});

req.on('error', function (e) {
    console.error(e);
});
