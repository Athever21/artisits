-- CreateTable
CREATE TABLE "artists" (
    "uuid" VARCHAR(36) NOT NULL,
    "name" VARCHAR(120) NOT NULL,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "albums" (
    "uuid" VARCHAR(36) NOT NULL,
    "title" VARCHAR(160) NOT NULL,
    "artistUuid" VARCHAR(36),

    CONSTRAINT "albums_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "genres" (
    "uuid" VARCHAR(36) NOT NULL,
    "name" VARCHAR(120) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "tracks" (
    "uuid" VARCHAR(36) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "genreUuid" VARCHAR(36),
    "albumUuid" VARCHAR(36),

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "albums" ADD CONSTRAINT "albums_artistUuid_fkey" FOREIGN KEY ("artistUuid") REFERENCES "artists"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_albumUuid_fkey" FOREIGN KEY ("albumUuid") REFERENCES "albums"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_genreUuid_fkey" FOREIGN KEY ("genreUuid") REFERENCES "genres"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
