import { Service } from "typedi";
import { TracksDao } from "./dao";

@Service()
export class TracksService {
  constructor(private readonly dao: TracksDao) {}

  async countWithArtists() {
    return await this.dao.countWithArtists();
  }
}