import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyModule } from "./company/company.module";
import { UserController } from "./user/controller/user.controller";
import { UserService } from "./user/provider/user.service";
import { UserModule } from "./user/user.module";


// database
// import modules
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/job_board_2'),

    // modules
    UserModule,
    CompanyModule,
  ],
  providers: [],
  controllers: []
})
export class MongoModule { }

// devide folder based on function
// folder based on domain