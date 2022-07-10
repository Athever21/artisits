import { PrismaClient } from "@prisma/client";
import { Service } from 'typedi';

import { BaseConfig } from "./config/base.config";

@Service()
export class DbService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: BaseConfig.dbUrl,
        },
      },
    });
    (async() => {
      await this.$connect();
    })()
  }
}
