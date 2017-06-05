const request = require('request');
//promisfied request function
module.exports = {
    request: (url) => {
        return (
            new Promise((resolve, reject) => {
                request(url, (error, response, body) => {
                    if(error) reject(error);
                    else resolve({response, body});
                });
            })
        )
    }
}