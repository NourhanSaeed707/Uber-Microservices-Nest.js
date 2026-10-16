import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/v1/rider-coordinates')
export class RiderCoordinatesController {

    @Get()
    getRiderCoordinates() {
        console.log("hello from rider coordinates");

    }

    @Post(@Body() createCoordinatesDTO: CreateCoordinatesDTO)
    save() {

    }
}
