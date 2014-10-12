hackerfire
==========

Simple Node module for the Hacker News Firebase API

### Installation:

```sh
npm install hackerfire
```

### Usage:

Get Top Stories:

```sh
var hackerfire = require('hackerfire');

var topStories = hackerfire.getTopStories();

topStories.on('value', function(response) {
  console.log(response.val());
});

```
Get User:

```sh
var user = hackerfire.getUserById('pg');

user.on('value', function(response) {
  console.log(response.val());
}, function(error) {
  console.log('retrieval failed: ' + error.code);
});

var users = hackerfire.getUserById([ 'pg', 'foobar' ]);

for(var i = 0; i < users.length; i++) {
  users[i].on('value', function(response) {
    console.log(response.val());
  }, function(error) {
    console.log('retrieval failed: ' + error.code);
  });
}

```

Get Item:

```sh
var item = hackerfire.getItem( '8265435' );

for(var i = 0; i < item.length; i++) {
  item.on('value', function(response) {
    console.log(response.val());
  }, function(error) {
    console.log('retrieval failed: ' + error.code);
  });
}

var items = hackerfire.getItem([ '8265435', '8168423' ]);

for(var i = 0; i < items.length; i++) {
  items.on('value', function(response) {
    console.log(response.val());
  }, function(error) {
    console.log('retrieval failed: ' + error.code);
  });
}

```

For more information on how firebase works for retrieving data, check out their docs:
https://www.firebase.com/docs/web/guide/retrieving-data.html

## Tests

```sh
npm install

gulp tests

```

## Issues
[Issues](https://github.com/mjw56/hackerfire/issues)

## License
[MIT License](https://raw.githubusercontent.com/mjw56/hackerfire/master/LICENSE)
