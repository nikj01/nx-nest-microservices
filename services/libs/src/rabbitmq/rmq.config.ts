import { ConfigService } from "@nestjs/config";
import { RabbitMQConfig, RabbitMQExchangeConfig } from "@golevelup/nestjs-rabbitmq";

const RMQ_EXCHANGES: RabbitMQExchangeConfig[] = [];

export const rmqConfig = (configService: ConfigService): RabbitMQConfig => {
  const uri = configService.get<string>("RNQ_URI");
  if (!uri) {
    throw new Error("RMQ_URI wasn't found");
  }
  return {
    exchanges: RMQ_EXCHANGES,
    uri,
    connectionInitOptions: { wait: false },
    connectionManagerOptions: {
      heartbeatIntervalInSeconds: 15,
      reconnectTimeInSeconds: 30,
    },
  };
};

// export class RmqConfig {
//   constructor(private readonly configService: ConfigService) {}
//   getOptions = (serviceName: string): RmqOptions => {
//     return {
//       transport: Transport.RMQ,
//       options: {
//         urls: this.configService.get<string[]>("RMQ_URI"),
//         queue: this.configService.get<string>(`RMQ_${serviceName}_QUEUE`),
//         queueOptions: {
//           durable: false,
//         },
//         noAck: true,
//         persistent: true,
//       },
//     };
//   };
// }
