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

hackerfire.getTopStories().then(function(response) {
  console.log(response);
});
```
Get User:

```sh
var user = hackerfire.getUserById('pg');

for(var i = 0; i < user.length; i++) {
  foo[i].then(function(response){
    console.log(response);
  })
}

var users = hackerfire.getUserById([ 'pg', 'foobar' ]);

for(var i = 0; i < users.length; i++) {
  foo[i].then(function(response){
    console.log(response);
  })
}

```

Get Item:

```sh
var item = hackerfire.getItem( '8265435' );

for(var i = 0; i < item.length; i++) {
  foo[i].then(function(response){
    console.log(response);
  })
}

var item = hackerfire.getItem([ '8265435', '8168423' ]);

for(var i = 0; i < items.length; i++) {
  foo[i].then(function(response){
    console.log(response);
  })
}

```

## Issues
[Issues](https://github.com/mjw56/hackerfire/issues)

## License
[MIT License](https://raw.githubusercontent.com/mjw56/hackerfire/master/LICENSE)
