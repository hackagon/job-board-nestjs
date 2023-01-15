import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { CompanyModule } from "./company/company.module";
import { UserController } from "./user/controller/user.controller";
import { UserService } from "./user/provider/user.service";
import { UserModule } from "./user/user.module";

// database
// import modules
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGO_URI')
        }
      },
      inject: [ConfigService]
    }),

    // modules
    AuthModule,
    UserModule,
    CompanyModule,
  ],
  providers: [],
  controllers: []
})
export class MongoModule { }

// devide folder based on function
// folder based on domain