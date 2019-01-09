const constant              = require(__basePath + '/app/config/constant');
const response              = require(constant.path.app + 'util/response');
const utility               = require(constant.path.app + 'util/utility');
const config                = require(constant.path.app + 'core/configuration');
const moment                = require('moment');
const {logger}              = require(constant.path.app + 'core/logger');
const underscore            = require('underscore');
const fs                    = require('fs');
const request               = require('request');
const winston               = require('winston');
const readLastLines         = require('read-last-lines');

const fileName = constant.path.clientLog + 'logger.txt' ;

/*
 * Fetch last 10 list from client Log
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */
exports.list = function (req, res, next) {

    logger.info('[list] get latest file log');

    try {
       fs.accessSync(fileName, fs.F_OK);
        
        var lines = readLastLines.read(fileName, 10).then((lines) => {
            return res.status(200).json(response.build('SUCCESS', lines));
        });
    } catch (e) {
        return res.status(500).json(response.build('ERROR_SERVER_ERROR', 'file not found'));
    }

};

/*
 * Add new Logs into clientLogger file from client system
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */
exports.create = function (req, res, next) {
    logger.info('[create] add New Log');

    let message   = req.body.message;

    const clientLog = new (winston.Logger)({
        emitErrs  : true,
        transports: [
             new (winston.transports.File)({
                level          : config.get('logging:fileLevel'),
                label          : config.get('logging:label'),
                name           : 'log_file',
                filename       : fileName,
                handleException: true,
                json           : false,
                maxSize        : 52428800,
                maxFiles       : 10,
                prettyPrint    : true,
                formatter      : function (options) {
                    return "[" + moment().format('YYYY-MM-DD hh:mm:ss') + "] " + 
                    (options.message ? options.message : '');
                }
            })
        ]
    });

    if (utility.isEmpty(message) === false) {
        clientLog.info(message);
    }

    return res.status(200).json(response.build('SUCCESS'));
        
};

