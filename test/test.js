'use strict';

const expect = require('chai').expect;
const handler = require('../handler.js');

describe('#apiData', function() {
    it('should return a json object', function() {
        handler()
            .then(data => {
                expect(data).to.be.an('object');
            })
      });
});