import * as path from 'path'

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
                fn: proto[route.name]
            });
        }
        Reflect.defineMetadata('$routes', routes, target);
    }
}

export function Route(method: string, path: string = '') {
    return (target: any, name: string, descriptor: TypedPropertyDescriptor<any>) => {
      const meta = Reflect.getMetadata('$routes', target) || [];
      meta.push({ method, path, name });
      Reflect.defineMetadata('$routes', meta, target);
    }
  }


