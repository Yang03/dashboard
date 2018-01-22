import * as path from 'path';
import { METHODS } from '../contants'

export function Controller(pathUrl: string = '') {
    return function(target) {
        const proto = target.prototype;
        const routeDefs = Reflect.getMetadata('$routes', proto) || [];
        const routes = [];

        for(const route of routeDefs) {
            const params = Reflect.getMetadata('$routes' + `_${route.name}`, proto) || [];
            routes.push({
                method: route.method,
                'path': path.join('/', pathUrl, route.path),
                name: route.name,
                params,
                controller: proto[route.name]
            });
        }
        Reflect.defineMetadata('$routes', routes, target);
    }   
}

export function Route(method: string, path: string = '') {
    return (target: any, name: string, descriptor: TypedPropertyDescriptor<any>) => {
        const meta = Reflect.getMetadata('$routes', target) || [];
        console.log({ method, path, name })
        meta.push({ method, path, name });
        Reflect.defineMetadata('$routes', meta, target);
    }
}

export function Get(path: string = '') {
    return Route(METHODS.GET, path);
}

export function Post(path: string = '') {
    return Route(METHODS.POST, path);
}

export function Delete(path: string = '') {
    return Route(METHODS.DELETE, path);
}

export function Head(path: string = '') {
    return Route(METHODS.HEAD, path);
}

export function Patch(path: string = '') {
    return Route(METHODS.PATCH, path);
}

export function Put(path: string = '') {
    return Route(METHODS.PUT, path);
}


