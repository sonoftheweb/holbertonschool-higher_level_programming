var https = require('https');

var options = {
    hostname: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
        'User-Agent': 'Holberton_School',
        'Authorization': 'token ' + process.env.TOKEN
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
        var filesystem = require('fs');
        filesystem.writeFile("/tmp/25", jsonString, function(err){
            if(err){
                return console.log(err);
            }
            else{
                return console.log('The file was saved!');
            }
        });
    });
});

req.on('error', function (e) {
    console.error(e);
});
