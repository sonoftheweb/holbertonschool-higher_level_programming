var https = require('https');

var options = {
    hostname: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
        'User-Agent': 'Holberton_School',
        'Authorization': 'token dd703610c39c15fb1a3731f772b1700b9bef7b74'
    }
};

function get_location(id){
    var userDetailsOptions = {
        hostname: 'api.github.com',
        path: '/user/' + id,
        headers: {
            'User-Agent': 'Holberton_School',
            'Authorization': 'token dd703610c39c15fb1a3731f772b1700b9bef7b74'
        }
    }

    var userLocation = https.get(userDetailsOptions, function(res){
        const userChunks = [];
        var userJsonString = '';

        user.on('data',(userChunk) => {
            userChunks.push(userChunk);
        });
        user.on('end', () => {
            userJsonString = userChunks.join('');
            return JSON.parse(userJsonString).location;
        })
    })
}


var req = https.get(options, function (res) {
    const chunks = [];
    var jsonString = '';
    var location = '';
    var s = []
    res.on('data', (chunk) => {
        chunks.push(chunk);
    });
    res.on('end', () => {
        jsonString = chunks.join('');
        var jsonobject = JSON.parse(jsonString);
        var full_names = jsonobject.items.map(function(obj){
            //get the location
            location = get_location(obj.id);
        });

        console.log(full_names.join('\n'));
    });
});

req.on('error', function (e) {
    console.error(e);
});
