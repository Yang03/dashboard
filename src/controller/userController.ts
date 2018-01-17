import { Controller, Route } from "../router/index";
import * as Koa from 'koa';

@Controller('user')
export default class UserController {
    @Route('get', 'test')
    test(ctx: Koa.Context) {
        ctx.body = 'test'
    }
}