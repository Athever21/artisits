import "reflect-metadata";
import Container from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";

import { ArtistsController } from "@/artists/controller";
import { TracksController } from "@/tracks/controller";
import { AlbumsController } from "@/albums/controller";

import errorMiddleware from "@/errors/errorMiddleware";

useContainer(Container);

const app = createExpressServer({
  controllers: [ArtistsController, TracksController, AlbumsController],
  defaultErrorHandler: false,
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
