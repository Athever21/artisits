import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { TracksService } from "./service";

@Service()
@JsonController('/tracks')
export class TracksController {
  constructor(private readonly service: TracksService) {}

  @Get('/count-with-artists')
  async countWithArtists() {
    return await this.service.countWithArtists();
  }
}