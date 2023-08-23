import { Module } from '@nestjs/common';
import { SayHelloModule } from '@server/sayHello/sayHello.module';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [SayHelloModule],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
