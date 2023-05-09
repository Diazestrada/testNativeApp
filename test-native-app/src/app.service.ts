import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTION_MICROSERVICES') private client: ClientProxy,
  ) {}

  async activity(data: any) {
    return this.client.send({ cmd: 'activity' }, data);
  }
}
