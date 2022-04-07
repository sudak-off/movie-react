import { ObjectId } from 'mongoose';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/track')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto)
    }

    @Get()
    get() {
        return this.trackService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id)
    }
}