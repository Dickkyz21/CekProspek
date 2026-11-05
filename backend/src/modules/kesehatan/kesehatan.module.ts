import { Module } from "@nestjs/common";
import { KesehatanController } from "./kesehatan.controller";

@Module({
  controllers: [KesehatanController],
})
export class KesehatanModule {}
