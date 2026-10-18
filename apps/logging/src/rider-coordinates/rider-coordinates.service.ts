import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema.js';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoorindateModel: Model<RiderCoordinate>,
        @Inject('RIDER_SERVICE') private client: ClientProxy
    ) { }

    async getAll(riderId: string) {
        const coordinates = await this.riderCoorindateModel.find({ rider: riderId }).exec();
        const pattern = { cmd: "get-rider" };
        const payload = { id: riderId };
        const rider = await firstValueFrom(this.client.send(pattern, payload));
        return { coordinates, rider };
    }

    async save(createCoordinatesDTO: CreateCoordinatesDTO) {
        return await this.riderCoorindateModel.create(createCoordinatesDTO);
    }
}
