import { Controller, Route, Get} from "../router/index";
import * as Koa from 'koa';

@Controller('user')
export default class UserController {
   // @inject()
    //public testService: TestService

    @Get('test')
    test(ctx: Koa.Context) {
        ctx.body = 'test'
    }

    @Get('test2')
    test2(ctx: Koa.Context) {
        ctx.body = 'test2'
    }
}