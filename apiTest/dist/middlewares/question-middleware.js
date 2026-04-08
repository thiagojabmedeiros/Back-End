"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestionMiddleware = createQuestionMiddleware;
exports.editQuestionMiddleware = editQuestionMiddleware;
exports.removeQuestionMiddleware = removeQuestionMiddleware;
function createQuestionMiddleware(request, response, next) {
    console.log("this question was verifyied by middleware!");
    return next();
}
function editQuestionMiddleware(request, response, next) {
    console.log("the question was verifyed and able to be edited!");
    return next();
}
function removeQuestionMiddleware(request, response, next) {
    console.log("the question was verifyed and able to be removed!");
}
