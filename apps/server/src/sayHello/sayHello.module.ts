import { Module } from '@nestjs/common';
import { SayHelloService } from '@server/sayHello/sayHello.service';

@Module({
  imports: [],
  providers: [SayHelloService],
  exports: [SayHelloService],
})
export class SayHelloModule {}
