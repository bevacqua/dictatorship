'use strict';

var exec = require('child_process').exec;

function returnInt(element){
    return parseInt(element, 10);
}

module.exports = {
    overthrow: function(port, done) {
        var grep = 'netstat -n -a -o | grep -i listening | grep :' + port,
            rpid = /\d+$/gim;

        exec(grep, function(err, data){
            if(err){
                return done(); // err: no pids
            }

            data.match(rpid).map(returnInt).forEach(function(pid){
                process.stdout.write('overthrowing pid ' + pid + '...');
                process.kill(pid);
                console.log('done');
            });

            done();
        });
    }
};