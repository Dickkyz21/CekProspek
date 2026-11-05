import { Module } from "@nestjs/common";
import { SkorService } from "./skor.service";

@Module({
  providers: [SkorService],
  exports: [SkorService],
})
export class SkorModule {}
