export async function jsonBodyHandler(request, response) {
    const buffer = []
    for await (const chunk of request) {
        buffer.push(chunk)
    }
    
    try {
        request.body = JSON.parse(Buffer.concat(buffer).toString())
    } catch(e) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}