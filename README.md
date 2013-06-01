# dictatorship #

Your **EADDRINUSE** nightmares _can come to an end_.

# overthrow(port, fn) #

Look for processes currently listening in the provided port, `process.kill` all of them, and then invoke the callback function, which will be safely able to listen on that port.

## Installation ##

    npm install dictatorship --save

## Usage ##

```js
    var dictatorship = require('dictatorship');

    dictatorship.overthrow(port, function(){
        app.listen(port); // no EADDRINUSE non-sense
    });
```

**Not recommended for production environments.** The purpose of this module is to overthrow renegade node processes spawned by [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch "grunt-contrib-watch on GitHub") and their ilk.