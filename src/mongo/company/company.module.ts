import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Company, CompanySchema } from "./company.schema";
import { CompanyController } from "./controller/company.controller";
import { CompanyService } from "./provider/company.service";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Company.name, schema: CompanySchema }
  ])
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule { }