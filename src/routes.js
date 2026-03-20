import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (request, response) =>{
            return response.end("List of products.")
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.end(JSON.stringify(request.body))
        }
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: (request, response) => {
            return response.end("The product was removed.")
        }
    }
]