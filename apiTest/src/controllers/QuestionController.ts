import { Request, Response } from "express"

class QuestionController {
    /**
     * index - get
     * search - get
     * create - post
     * edit - put
     * remove - delete
     */

    index (request: Request, response: Response) {
        response.status(200).json({})
    }
    search (request: Request, response: Response) {
        response.status(200).json({})
    }
    create (request: Request, response: Response) {
        response.status(201).json({})
    }
    edit (request: Request, response: Response) {
        response.status(200).json({})
    }
    remove (request: Request, response: Response) {
        response.status(200).json({})
    }
}

export { QuestionController }