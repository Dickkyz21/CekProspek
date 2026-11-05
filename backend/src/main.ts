import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { AppModule } from "./app.module";
import { env } from "./config/env";
import { DatabaseService } from "./db/database.module";
import { jalankanMigrasi } from "./db/migrasi";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Migrasi idempoten: berkas yang sudah tercatat di tabel _migrasi dilewati.
  if (env.MIGRASI_SAAT_START === "true") {
    const diterapkan = await jalankanMigrasi(app.get(DatabaseService).klien);
    if (diterapkan.length > 0) console.log("Migrasi diterapkan:", diterapkan.join(", "));
  }

  app.setGlobalPrefix("api/v1");
  app.use(cookieParser());
  app.enableCors({ origin: env.APP_ORIGIN, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(env.PORT);
}

bootstrap().catch((err) => {
  console.error("Backend gagal berjalan:", err);
  process.exit(1);
});
