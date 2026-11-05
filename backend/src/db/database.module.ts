import { Global, Injectable, Module, type OnModuleDestroy } from "@nestjs/common";
import type { Client } from "@libsql/client";
import { buatKlien } from "./klien";

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  readonly klien: Client = buatKlien();

  onModuleDestroy() {
    this.klien.close();
  }
}

@Global()
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
