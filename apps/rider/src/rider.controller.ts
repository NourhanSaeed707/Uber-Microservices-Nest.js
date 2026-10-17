import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service.js';

@Controller('/v1/rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get(':id')
  getRiderById(@Param() param: any) {
    return this.riderService.getHello();
  }
}
