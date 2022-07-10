// import "isomophric-fetch";
import { RedisClientType, createClient } from "redis";
import { Service } from "typedi";

import { BaseConfig } from "@/config/base.config";

@Service()
export class RedisClient {
  private readonly client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: `redis://${BaseConfig.redisHost}:${BaseConfig.redisPort}`,
      password: BaseConfig.redisPassword,
    });
    (async() => {
      await this.client.connect();
    })();
  }

  async get(key: string) {
    const ret = await this.client.get(key);
    return ret ? JSON.parse(ret) : null;
  }

  async set(key: string, val: any, exp: number) {
    return await this.client.setEx(key, exp, JSON.stringify(val));
  }
}
