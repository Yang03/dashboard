

export * from './decorators/';
export * from './createServer'

// export function registerRoute(app: any, router: any, controllers: any []):void {
//     for (let ctrl of controllers) {
//         const routes = Reflect.getMetadata('$routes', ctrl);
//         for (let { method, url} of routes) {
//             console.log(method)
//             router[method](url, ctrl)
//         }
//     }
//     app.use(router.routes());
//     app.use(router.allowedMethods());
// }


