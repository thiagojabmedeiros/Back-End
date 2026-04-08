"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserMiddleware = createUserMiddleware;
function createUserMiddleware(request, response, next) {
    console.log("this user was verified by middleware!");
    return next();
}
