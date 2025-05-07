import { Controller, Route, Get, Tags } from 'tsoa';

@Route('HelloWorld')
@Tags('HelloWorld')
export class HelloWorldController extends Controller {
  @Get()
  hello(): HelloWorldInterface {
    return {message: 'Hello World!'};
  }

  @Get('{name}')
  helloName(name: string): HelloWorldInterface {
    return {message: `Hello ${name}!`};
  }
}

export interface HelloWorldInterface {
  message: string;
}