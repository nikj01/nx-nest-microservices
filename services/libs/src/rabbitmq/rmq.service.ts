import { RmqOptions } from "@nestjs/microservices/interfaces/microservice-configuration.interface";
import { ConfigService } from "@nestjs/config";
import { Transport } from "@nestjs/microservices";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}
  getOptions = (queueName: string): RmqOptions => {
    return {
      transport: Transport.RMQ,
      options: {
        urls: this.configService.get<string[]>("RMQ_URI"),
        queue: this.configService.get<string>(`RMQ_${queueName}_QUEUE`),
        queueOptions: {
          durable: false,
        },
        noAck: false,
        persistent: true,
      },
    };
  };
}
