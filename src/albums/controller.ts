import { Get, JsonController, Param } from "routing-controllers";
import { Service } from "typedi";
import { AlbumService } from "./service";

@Service()
@JsonController('/albums')
export class AlbumsController {
  constructor(private readonly service: AlbumService) {}

  @Get('/artist/:artist')
  async getAllByArtist(@Param('artist') artist: string) {
    return await this.service.getAllByArtist(artist);
  }
}