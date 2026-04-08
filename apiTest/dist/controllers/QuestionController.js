"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
class QuestionController {
    /**
     * index - get
     * search - get
     * create - post
     * edit - put
     * remove - delete
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
    edit(request, response) {
        response.status(200).json({});
    }
    remove(request, response) {
        response.status(200).json({});
    }
}
exports.QuestionController = QuestionController;
