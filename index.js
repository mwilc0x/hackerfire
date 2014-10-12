#!/usr/bin/env node

'use strict';

var rp = require('request-promise'),
    firebase = require('firebase'),
    baseUrl = 'https://hacker-news.firebaseio.com/v0/';

module.exports = {

  getTopStories: function() {
    return new firebase( baseUrl + 'topstories' );
  },

  getUserById: function(ids) {

    var promises = [];

    if(!Array.isArray(ids)) ids = [ids];

    for(var i = 0; i < ids.length; i++) {
      promises.push(new firebase( baseUrl + 'user/' + ids[i] ));
    }

    return promises;

  },

  getItem: function(ids) {

    var promises = [];

    if(!Array.isArray(ids)) ids = [ids];

    for(var i = 0; i < ids.length; i++) {
      promises.push(new firebase( baseUrl + 'item/' + ids[i] ));
    }

    return promises;

  }

}
