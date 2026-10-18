import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service.js';
import { MessagePattern } from '@nestjs/microservices';

@Controller('/v1/rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) { }

  @Get(':id')
  @MessagePattern({ cmd: " get-rider" })
  async getRiderById(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: "jane",
      lastName: "doe",
      email: "jane@mail.com"
    })
  }
}
