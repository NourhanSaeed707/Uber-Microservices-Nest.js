import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto.js';
import { RiderCoordinatesService } from './rider-coordinates.service.js';

@Controller('/v1/rider-coordinates')
export class RiderCoordinatesController {
    constructor(private riderCoordinateService: RiderCoordinatesService) { }

    @Get()
    async getRiderCoordinates() {
        return await this.riderCoordinateService.getAll();

    }

    @Post()
    async save(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
        return await this.riderCoordinateService.save(createCoordinatesDTO);
    }
}
