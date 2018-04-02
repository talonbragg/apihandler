'use strict'

const http = require('http');

module.exports = function handler(apiurl) {
    //Handler code
    let url = apiurl;

    let request = http.get(url, function(response) {
        // data is streamed in chunks from the server
        // so we have to handle the "data" event
        let buffer = "",
            data,
            route;

        response.on("data", function(chunk) {
            buffer += chunk;
        });

        response.on("end", function(err) {
            // finished transferring data
            // dump the raw data
            data = JSON.parse(buffer);
            return Promise.resolve(data);
        });
    });

}
