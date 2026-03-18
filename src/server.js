import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"

const server = http.createServer(async (request, response) => {
    const { method, url } = request
    await jsonBodyHandler(request, response)

    if (method === "GET" && url === "/products") {
        return response.writeHead(200).end("List of products!")
    } 
    else if (method === "POST" && url === "/products") {
        console.log(request.body)
        return response.writeHead(201).end(JSON.stringify(request.body))
    } 
    else {
        return response.writeHead(404).end("Not Found.")
    }

})

server.listen(3333)