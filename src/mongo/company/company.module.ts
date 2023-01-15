import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SerializationModule } from "src/common/serialization/serialization.module";
import { Company, CompanySchema } from "./company.schema";
import { CompanyController } from "./controller/company.controller";
import { CompanyService } from "./provider/company.service";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Company.name, schema: CompanySchema }
  ]),
    SerializationModule
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule { }