"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
let code = 300;
generateError("An Error Occurred", code);
