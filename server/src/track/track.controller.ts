import { Controller, Get } from "@nestjs/common";


@Controller('/track')
export class TrackController {

    create() {

    }

    @Get()
    get() {
        return 'All work'
    }

    getOne() {

    }

    delete() {

    }
}