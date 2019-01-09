class ExecPHP {

    constructor() {
        this.phpPath = 'php';
        this.phpFolder = '';
    }

    parseFile(fileName, callback) {
        var realFileName = this.phpFolder + fileName;

        var exec = require('child_process').exec;
        var cmd = this.phpPath + ' ' + realFileName;

        exec(cmd, function(error, stdout) {
            callback(error, stdout);
        });
    }
}

module.exports = function() {
    return new ExecPHP();
};