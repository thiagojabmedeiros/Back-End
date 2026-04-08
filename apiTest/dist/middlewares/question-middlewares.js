"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestionMiddleware = createQuestionMiddleware;
exports.editQuestionMiddleware = editQuestionMiddleware;
exports.removeQuestionMiddleware = removeQuestionMiddleware;
function createQuestionMiddleware(request, response, next) {
    console.log("the question creation was passed by middleware!");
    return next();
}
function editQuestionMiddleware(request, response, next) {
    console.log("the question edtion was passed by middleware!");
    return next();
}
function removeQuestionMiddleware(request, response, next) {
    console.log("the question remotion was passed by middleware!");
    return next();
}
