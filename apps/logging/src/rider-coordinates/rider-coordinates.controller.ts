import { Controller, Get } from '@nestjs/common';

@Controller('/v1/rider-coordinates')
export class RiderCoordinatesController {

    @Get()
    getRiderCoordinates() {
        console.log("hello from rider coordinates");

    }
}
