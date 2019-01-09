const constant      = require(__basePath + 'app/config/constant');
const config        = require(constant.path.app + 'core/configuration');
const NodeException = require("node-exceptions");

//Services Exception
class PaisabazaarException extends NodeException.LogicalException {
    constructor(ERROR_KEY = 'ERROR_SERVER_ERROR') {
        super();
        const error   = config.get(`APP_MESSAGES:${ERROR_KEY}`);
        this.message  = error.message;
        this.status   = error.statusCode;
        this.code     = error.errorCode;
        this.response = {};
    }
}


class ApplicationNotFoundException extends PaisabazaarException {
    constructor() {
        super("APPLICATION_NOT_FOUND");
    }
}

class AtomException extends PaisabazaarException {
    constructor(statusCode, message) {
        super("ATOM_EXCEPTION");
        this.status  = statusCode;
        this.message = message;
    }
}

class PaymentGatewayException extends PaisabazaarException {
    constructor(message) {
        super("PAYMENT_GATEWAY_EXCEPTION");
        this.message = message;
    }
}

class UserNotFoundException extends PaisabazaarException {
    constructor(response) {
        super("USER_NOT_FOUND");
        this.response = response;
    }
}

class ReportNotFoundException extends PaisabazaarException {
    constructor(response) {
        super("REPORT_NOT_FOUND");
        this.response = response;
    }
}

class FieldMissingException extends PaisabazaarException {
    constructor(response) {
        super("FIELD_MISSING_EXCEPTION");
        this.response = response;
    }
}

class CustomerProfileNotFoundException extends PaisabazaarException {
    constructor() {
        super("CUSTOMER_PROFILE_NOT_FOUND");
    }
}

class CustomerProfileAlreadyExistsException extends PaisabazaarException {
    constructor() {
        super("CUSTOMER_PROFILE_ALREADY_EXISTS");
    }
}

class ClientConnectionTimeout extends PaisabazaarException {
    constructor() {
        super("ERROR_CONNECTION_TIMEOUT");
    }
}

class VisitorNotCreatedException extends PaisabazaarException {
    constructor() {
        super("VISITOR_NOT_CREATED");
    }
}

class VisitNotCreatedException extends PaisabazaarException {
    constructor() {
        super("VISIT_NOT_CREATED");
    }
}

class CustomerNotCreatedException extends PaisabazaarException {
    constructor() {
        super("CUSTOMER_NOT_CREATED");
    }
}

class InvalidAuthTokenException extends PaisabazaarException {
    constructor() {
        super("INVALID_AUTH_TOKEN");
    }
}

class InvalidAuthSignatureException extends PaisabazaarException {
    constructor() {
        super("INVALID_AUTH_SIGNATURE");
    }
}

class AuthTokenExpiredException extends PaisabazaarException {
    constructor() {
        super("AUTH_TOKEN_EXPIRED");
    }
}

class InvalidBureauTypeException extends PaisabazaarException {
    constructor() {
        super("INVALID_BUREAU_TYPE");
    }
}

/*
 * Error Handler 
 */
const errorHandler = function (err, req, res, next) {

    req.app.get('di').log.logger.error(err);

    return res.status(err.status || 500).json({
        status       : false,
        statusMessage: err.message,
        statusCode   : err.code,
        response     : err.response
    });
};

module.exports = {
    errorHandler                         : errorHandler,
    VisitorNotCreatedException           : VisitorNotCreatedException,
    VisitNotCreatedException             : VisitNotCreatedException,
    CustomerNotCreatedException          : CustomerNotCreatedException,
    ClientConnectionTimeout              : ClientConnectionTimeout,
    ApplicationNotFoundException         : ApplicationNotFoundException,
    UserNotFoundException                : UserNotFoundException,
    CustomerProfileNotFoundException     : CustomerProfileNotFoundException,
    CustomerProfileAlreadyExistsException: CustomerProfileAlreadyExistsException,
    ReportNotFoundException              : ReportNotFoundException,
    FieldMissingException                : FieldMissingException,
    AtomException                        : AtomException,
    PaymentGatewayException              : PaymentGatewayException,
    InvalidAuthTokenException            : InvalidAuthTokenException,
    InvalidAuthSignatureException        : InvalidAuthSignatureException,
    AuthTokenExpiredException            : AuthTokenExpiredException,
    InvalidBureauTypeException           : InvalidBureauTypeException

};
