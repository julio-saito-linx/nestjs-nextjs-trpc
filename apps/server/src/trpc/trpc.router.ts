import { INestApplication, Injectable, Logger } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { SayHelloService } from '@server/sayHello/sayHello.service';

export const HelloInputProps = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
});

@Injectable()
export class TrpcRouter {
  private readonly logger = new Logger(TrpcRouter.name);

  constructor(
    private readonly trpc: TrpcService,
    private readonly sayHelloService: SayHelloService,
  ) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure.input(HelloInputProps).query(({ input }) => {
      const finalPhrase = `${this.sayHelloService.sayHello()} ${
        input.name || 'NO_NAME'
      }, you are ${input.age || 18} years old!`;

      this.logger.log({ finalPhrase });
      return finalPhrase;
    }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
