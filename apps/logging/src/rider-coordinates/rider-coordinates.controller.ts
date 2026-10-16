import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto.js';

@Controller('/v1/rider-coordinates')
export class RiderCoordinatesController {

    @Get()
    getRiderCoordinates() {
        console.log("hello from rider coordinates");

    }

    @Post()
    save(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {

    }
}
