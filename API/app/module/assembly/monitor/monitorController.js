const constant = require(__basePath + '/app/config/constant');
const response = require(constant.path.app + 'util/response');
const {logger} = require(constant.path.app + 'core/logger');

exports.ping = function (req, res, next) {
	logger.info('[ping] check server is working or not.');
	
	return res.status(200).json(response.build('SUCCESS', 'PONG'));
}
