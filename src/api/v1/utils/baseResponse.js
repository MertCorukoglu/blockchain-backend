const ERROR_CODES = require("../common/error-codes");
const { LANGUAGES } = require("../common/common");
module.exports = (isError, response, errorCode, lang) => {
  if (isError) {
    return generateMessage(errorCode, lang);
  } else {
    return {
      isError: false,
      payload: response,
    };
  }
};

generateMessage = (errorCode, lang) => {
  const language = lang ? lang : LANGUAGES.TR;
  const LANGUAGE = require(`../language/${language}`);
  return {
    isError: true,
    errorCode: errorCode?.key,
    message: LANGUAGE[errorCode?.value],
  };
};
