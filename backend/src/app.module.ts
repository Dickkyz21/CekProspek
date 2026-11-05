import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BullModule } from "@nestjs/bullmq";
import { env } from "./config/env";
import { DatabaseModule } from "./db/database.module";
import { AuthModule } from "./modules/auth/auth.module";
import { KesehatanModule } from "./modules/kesehatan/kesehatan.module";
import { KontakModule } from "./modules/kontak/kontak.module";
import { SkorModule } from "./modules/skor/skor.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({ connection: { url: env.REDIS_URL } }),
    DatabaseModule,
    KesehatanModule,
    AuthModule,
    KontakModule,
    SkorModule,
    // Modul lain (impor, transaksi, ringkasan, langganan, pembayaran, produk-digital, tim, pengguna, notifikasi)
    // didaftarkan saat implementasi dimulai.
  ],
})
export class AppModule {}
