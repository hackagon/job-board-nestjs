import { Body, Controller, Post, UseGuards, Request, InternalServerErrorException } from "@nestjs/common";
import _ from "lodash";
import { JwtAuthGuard } from "src/mongo/auth/guard/jwt.guard";
import { CompanyService } from "../provider/company.service";

@Controller('/companies')
export class CompanyController {
  constructor(
    private companyService: CompanyService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() data,
    @Request() req: Request
  ) {
    const creatorId = _.get(req, 'user._id')
    data.creatorId = creatorId;
    return this.companyService.create(data)
  }
}