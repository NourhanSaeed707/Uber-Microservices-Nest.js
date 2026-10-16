import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema.js';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto.js';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoorindateModel: Model<RiderCoordinate>
    ) { }

    async getAll() {
        return await this.riderCoorindateModel.find().exec();
    }

    async save(createCoordinatesDTO: CreateCoordinatesDTO) {
        return await this.riderCoorindateModel.create(createCoordinatesDTO);
    }
}
