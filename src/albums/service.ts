import { Service } from "typedi";
import { AlbumsDao } from "./dao";

@Service()
export class AlbumService {
  constructor(private readonly dao: AlbumsDao) {}
  
  async getAllByArtist(artist: string) {
    return await this.dao.getAllByArtists(artist);
  }
}