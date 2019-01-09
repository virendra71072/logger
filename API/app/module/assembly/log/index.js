const constant  = require(__basePath + 'app/config/constant');
const router    = require('express').Router({
    caseSensitive   : true,
    strict          : true
});

const logAssembly   = require(constant.path.module + 'assembly/log/logAssembly');
const validation    = require(constant.path.module + 'assembly/log/logValidation');


/*
 * Router list
 */
 /* get latest list of logs */
router.get(
    '/list',
    //validation.list,  // for validation
    logAssembly.list
);

/* Add new log in custom log file */
router.post(
    '/create',
    logAssembly.create
);

module.exports = {
    router: router
};
