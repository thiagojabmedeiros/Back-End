"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    /**
     * index - get
     * search - get
     * create - post
     */
    index(request, response) {
        response.status(200).json({});
    }
    search(request, response) {
        response.status(200).json({});
    }
    create(request, response) {
        response.status(201).json({});
    }
}
exports.UserController = UserController;
