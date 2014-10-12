(function() {
  'use strict';

  var chai = require('chai'),
      should = chai.should(),
      expect = chai.expect,
      spies = require('chai-spies'),
      hackerfire = require('../index');

  describe('hackerfire node module', function() {

    beforeEach(function(){
      chai.use(spies);
    });

    describe('top stories', function() {

      it('should return a list of top stories', function(done) {

        var stories = hackerfire.getTopStories();
        stories.on('value', function(snapshot){
          expect(snapshot.val()).to.not.be.undefined;
          done();
        });

      });

    });

    describe('users', function() {

      it('should return a list of users with a single string input', function(done) {

        var user = hackerfire.getUserById('pg');

        expect(user).to.have.length.of.at.least(1);

        for(var i = 0; i < user.length; i++) {
          user[i].on('value', function(snapshot){
            expect(snapshot.val()).to.not.be.undefined;
          });
        }

        done();

      });

      it('should return a list of users with an array input of users', function(done) {

        var users = hackerfire.getUserById(['pg', 'mot0rola']);

        expect(users).to.have.length.of.at.least(2);

        for(var i = 0; i < users.length; i++) {
          users[i].on('value', function(snapshot){
            expect(snapshot.val()).to.not.be.undefined;
          });
        }

        done();

      });

    });

    describe('item', function() {

      it('should return a list of items with a single string input', function(done) {

        var item = hackerfire.getItem('8265435');

        expect(item).to.have.length.of.at.least(1);

        for(var i = 0; i < item.length; i++) {
          item[i].on('value', function(snapshot){
            expect(snapshot.val()).to.not.be.undefined;
          });
        }

        done();

      });

      it('should return a list of items with an array input of users', function(done) {

        var item = hackerfire.getItem(['8265435', '8168423']);

        expect(item).to.have.length.of.at.least(2);

        for(var i = 0; i < item.length; i++) {
          item[i].on('value', function(snapshot){
            expect(snapshot.val()).to.not.be.undefined;
          });
        }

        done();

      });

    });
  });
})();
