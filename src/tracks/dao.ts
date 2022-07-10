import { DbService } from "@/db";
import { RedisClient } from "@/redis";
import { Service } from "typedi";

@Service()
export class TracksDao {
  constructor(
    private readonly db: DbService,
    private readonly redis: RedisClient
  ) {}

  async countWithArtists() {
    const cached = await this.redis.get('tracksWithArtists');

    if (cached) {
      return cached;
    }

    const count = await this.db.track.count({
      where: {
        Album: {
          Artist: {}
        }
      }
    });

    this.redis.set('tracksWithArtists', { count }, 300);
    return { count };
  }
}
