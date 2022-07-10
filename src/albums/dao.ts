import { DbService } from "@/db";
import { RedisClient } from "@/redis";
import { Service } from "typedi";

@Service()
export class AlbumsDao {
  constructor(
    private readonly db: DbService,
    private readonly redis: RedisClient
  ) {}

  async getAllByArtists(artist: string) {
    const key = `Album-${artist}`;
    const cached = await this.redis.get(key);
  
    if(cached) {
      return cached;
    }

    const albums = await this.db.album.findMany({
      where: {
        Artist: {
          name: {
            equals: artist,
            mode: 'insensitive'
          }
        }
      }
    });
   
    await this.redis.set(key, albums, 1);
    return albums;
  }
}
