import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";
import { Database } from "../database.js"
const database = new Database()

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    if (route) {
        const routeParams = request.url.match(route.path)
        // console.log(routeParams)
        const {query, ...params} = routeParams.groups
        request.params = query ? extractQueryParams(query) : {}
        // console.log(params)
        request.params = params
        return route.controller({ request, response, database })
    }

    return response.writeHead(404).end("Not Found.")
}