const constant      = require(__basePath + '/app/config/constant');
const logger        = require(constant.path.app + 'core/logger');
const config        = require(constant.path.app + 'core/configuration');

module.exports = function (app) {
    //Setting dependencies
    app.set('di', {
        constant: constant,
        log     : logger,
        config  : config
    });

    //Application Modules to load
    app.use('/api/v1/monitor', require(constant.path.module + 'assembly/monitor').router);
    app.use('/api/v1/log', require(constant.path.module + 'assembly/log').router);
   
};
