import { Service } from "typedi";

import { DbService } from "@/db";
import { RedisClient } from "@/redis";

@Service()
export class ArtistsDao {
  constructor(
    private readonly dbService: DbService,
    private readonly redis: RedisClient
  ) {}

  async getAllArtistByGenre(genre: string) {
    const cached = await this.redis.get(`Artists-${genre}`);

    if (cached) {
      console.log('cached');
      return cached;
    }

    const artists = await this.dbService.artist.findMany({
      where: {
        albums: {
          every: {
            tracks: {
              every: {
                Genre: {
                  name: {
                    equals: genre,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    await this.redis.set(`Artists-${genre}`, artists, 300)
    return artists;
  }
}
