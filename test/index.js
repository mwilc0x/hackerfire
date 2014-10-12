(function() {
  'use strict';

  var chai = require('chai'),
      should = chai.should(),
      expect = chai.expect,
      spies = require('chai-spies'),
      hackerfire = require('hackerfire');

  describe('hackerfire node module', function() {

    beforeEach(function(){
      chai.use(spies);
    });

    describe('top stories', function() {

      it('should return a list of top stories', function() {

        hackerfire.getTopStories(function(res) {
          expect(res).to.not.be.undefined;
        });
        
      });

    });

    describe('users', function() {

      it('should return a list of users with a single string input', function() {

        hackerfire.getUserById('mot0rola', function(res) {
          expect(res).to.not.be.undefined;
        });

      });

      it('should return a list of users with an array input of users', function() {

        hackerfire.getUserById(['pg', 'mot0rola'], function(res) {
          expect(res).to.not.be.undefined;
        });

      });

    });

    describe('item', function() {

      it('should return a list of items with a single string input', function() {

        hackerfire.getUserById('8265435', function(res) {
          expect(res).to.not.be.undefined;
        });

      });

      it('should return a list of items with an array input of users', function() {

        hackerfire.getUserById([ '8265435', '8168423' ], function(res) {
          expect(res).to.not.be.undefined;
        });

      });

    });
  });
})();
