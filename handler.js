'use strict'

var http = require('http');

module.exports = function handler(apiurl) {

    var buffer = "",
        data,
        route,
        data = new Promise(function(resolve, reject) {
            http.get(apiurl, function(response) {
                // data is streamed in chunks from the server
                // so we have to handle the "data" event

                response.on("data", function(chunk) {
                    buffer += chunk;
                });

                response.on("end", function(err) {
                    // finished transferring data
                    // dump the raw data
                    resolve(JSON.parse(buffer));
                });
            });
        });
    return data;

}
