"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserMiddleware = createUserMiddleware;
function createUserMiddleware(request, response, next) {
    console.log("the user creation was passed by middleware!");
    return next();
}
