'use strict';

var exec = require('child_process').exec;

function returnInt(element){
    return parseInt(element.trim(), 10);
}

function execute(command, rpid, done){
    exec(command, function(err, data){
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

module.exports = {
    overthrow: function(port, done) {
        var command, rpid;

        if(process.platform === 'darwin'){ // mac os
            command = 'lsof -i tcp:' + port + ' | grep node | grep -i listen';
            rpid = / \d+ /gm;
        }else{
            command = 'netstat -n -a -o | findstr -i listening | findstr :' + port;
            rpid = /\d+$/gm;
        }

        execute(command, rpid, done);
    }
};
