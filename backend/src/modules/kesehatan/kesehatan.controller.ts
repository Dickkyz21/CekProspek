import { Controller, Get } from "@nestjs/common";
import { DatabaseService } from "../../db/database.module";

// Dipakai health check Render. Gagal jika basis data tidak terjangkau.
@Controller("kesehatan")
export class KesehatanController {
  constructor(private readonly db: DatabaseService) {}

  @Get()
  async cek() {
    await this.db.klien.execute("SELECT 1");
    return { status: "ok", database: "ok" };
  }
}
