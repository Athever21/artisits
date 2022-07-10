import { Get, JsonController, Param } from "routing-controllers";
import { Service } from "typedi";
import { ArtistService } from "./service";

@Service()
@JsonController('/artists')
export class ArtistsController {
  constructor (private readonly service: ArtistService) {}

  @Get('/genre/:genre') 
  async getAllByGenre(@Param('genre') genre: string) {
    return await this.service.getAllArtistByGenre(genre);
  }
}