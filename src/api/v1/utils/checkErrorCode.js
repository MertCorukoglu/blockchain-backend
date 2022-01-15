const ERROR_CODES = require("../common/error-codes");

module.exports = (error) => {
    return  error.code ? error.code : ERROR_CODES.ERR_00002;
}