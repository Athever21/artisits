import { Service } from "typedi";

import { ArtistsDao } from "./dao";

@Service()
export class ArtistService {
  constructor (private readonly dao: ArtistsDao) {}

  async getAllArtistByGenre(genre: string) {
    return await this.dao.getAllArtistByGenre(genre);
  }
}