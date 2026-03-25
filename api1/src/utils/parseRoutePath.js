export function parseRoutePath(path) {
    const routeRegex = /\:([a-zA-z]+)/g

    const params = path.replaceAll(routeRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)
    
    // console.log(pathRegex)
    return pathRegex
}