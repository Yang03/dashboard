import { importClassesFromDirectories } from "./util/importClassesFromDirectories";

export function createServer(app: any, routerRoutes: any, controllers: any): any {
    let controllerClasses: Function[];
    if (controllers && controllers.length) {
        controllerClasses = (controllers as any[]).filter(controller => controller instanceof Function);
        const controllerDirs = (controllers as any[]).filter(controller => typeof controller === "string");
        controllerClasses.push(...importClassesFromDirectories(controllerDirs));
    }
    for(const ctrl of controllerClasses) {
        const routes = Reflect.getMetadata('$routes', ctrl);
        for(const { method, path, controller } of routes) {
          routerRoutes[method](path, controller);
        }
    }
    app.use(routerRoutes.routes());
    app.use(routerRoutes.allowedMethods());
}