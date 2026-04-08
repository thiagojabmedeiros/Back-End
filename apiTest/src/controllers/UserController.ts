import { Request, Response } from "express"

class UserController {
    /**
     * index - get
     * search - get
     * create - post
     */
    index(request: Request, response: Response) {
        response.status(200).json({})
    }
    
    search(request: Request, response: Response) {
        response.status(200).json({})
    }

    create(request: Request, response: Response) {
        response.status(201).json({})
    }
}

export { UserController }