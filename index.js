'use strict';

var rp = require('request-promise');
var baseUrl = 'https://hacker-news.firebaseio.com/v0/';

module.exports = {

  getTopStories: function() {
    return rp( baseUrl + 'topstories.json?print=pretty' );
  },

  getUserById: function(ids) {

    var promises = [];

    if(!Array.isArray(ids)) ids = [ids];

    for(var i = 0; i < ids.length; i++) {
      promises.push(rp( baseUrl + 'user/' + ids[i] + '.json?print=pretty' ));
    }

    return promises;
    
  },

  getItem: function(ids) {

    var promises = [];

    if(!Array.isArray(ids)) ids = [ids];

    for(var i = 0; i < ids.length; i++) {
      promises.push(rp( baseUrl + 'item/' + ids[i] + '.json?print=pretty' ));
    }

    return promises;

  }

}
