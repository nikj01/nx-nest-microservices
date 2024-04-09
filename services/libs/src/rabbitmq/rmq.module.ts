import { Global, Module } from "@nestjs/common";
import { rmqConfig } from "./rmq.config";
import { ConfigService } from "@nestjs/config";
import {
  AmqpConnectionManager,
  RabbitMQModule,
  RabbitRpcParamsFactory,
} from "@golevelup/nestjs-rabbitmq";

@Global()
@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (config: ConfigService) => rmqConfig(config),
      inject: [ConfigService],
    }),
  ],
  providers: [RabbitRpcParamsFactory, AmqpConnectionManager],
  exports: [RabbitMQModule],
})
export class RmqModule {
  // static registerClientsModuleAsync(name: string): DynamicModule {
  //   return {
  //     module: RmqModule,
  //     imports: [
  //       ClientsModule.registerAsync([
  //         {
  //           name,
  //           useFactory: (configService: ConfigService) => ({
  //             transport: Transport.RMQ,
  //             options: {
  //               urls: configService.get<string[]>("RMQ_URI"),
  //               queue: configService.get<string>(`RMQ_${name}_QUEUE`),
  //               queueOptions: {
  //                 durable: false,
  //               },
  //               noAck: true,
  //               persistent: true,
  //             },
  //           }),
  //           inject: [ConfigService],
  //         },
  //       ]),
  //     ],
  //     exports: [ClientsModule],
  //   };
  // }
}
