'use strict';

const expect = require('chai').expect;
const handler = require('../handler.js');

describe('#apiData', function() {
    it('should return a json object', function() {
        handler("http://sponge-impulse.glitch.me/finduser/?name=dabest")
            .then(data => {
                expect(data).to.be.an('object');
            })
      });
    it('should return a string', function() {
        handler('http://sponge-impulse.glitch.me/finduser/?name=dabest')
            .then(data => {
                expect(data.userName).to.be.a('string');
            })
    });
    it('should return a string', function() {
        handler('http://sponge-impulse.glitch.me/finduser/?name=Test')
            .then(data => {
                expect(data._id).to.be.a('string');
            })
    });
    it('should return an integer', function() {
        handler('http://sponge-impulse.glitch.me/finduser/?name=Test')
            .then(data => {
                expect(data.__v).to.be.a('number');
            })
    });
});