import { Body, Controller, Post } from "@nestjs/common";
import { CompanyService } from "../provider/company.service";

@Controller('/companies')
export class CompanyController {
  constructor(
    private companyService: CompanyService
  ) { }

  @Post()
  create(
    @Body() data
  ) {
    return this.companyService.create(data)
  }
}