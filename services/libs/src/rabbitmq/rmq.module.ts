import { DynamicModule, Module } from "@nestjs/common";
import { RmqService } from "./rmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";
import { NestMicroserviceOptions } from "@nestjs/common/interfaces/microservices/nest-microservice-options.interface";
import { RmqOptions } from "@nestjs/microservices/interfaces/microservice-configuration.interface";

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static registerClientsModuleAsync(name: string): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: configService.get<string[]>("RMQ_URI"),
                queue: configService.get<string>(`RMQ_${name}_QUEUE`),
                queueOptions: {
                  durable: false,
                },
                noAck: true,
                persistent: true,
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
