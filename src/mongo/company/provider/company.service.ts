import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { AbstractRepository } from "src/common/abstract/abstract.repository";
import { Company } from "../company.schema";

@Injectable()
export class CompanyService extends AbstractRepository<Company>{
  protected readonly logger = new Logger(CompanyService.name);

  constructor(
    @InjectModel(Company.name) companyModel: Model<Company>,
    @InjectConnection() connection: Connection
  ) {
    super(companyModel, connection)
  }

  // create(data) {
  //   return this.companyModel.create(data)
  // }
}