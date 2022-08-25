import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
const setting =require("../ormconfig.json")
console.log(setting)
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'admin123',
    database:'mydb',
    // entities:[User],
    autoLoadEntities:true,
    synchronize:true,
    logging:true
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

  // imports: [TypeOrmModule.forRootAsync({
  //   imports: [ConfigModule.forRoot({
  //     isGlobal:true,
  //     envFilePath:'.local.env '
  //     // envFilePath:'.prod.env '
  //   })],
  //   useFactory: async (configService: ConfigService) => ({
  //     type: 'postgres' as 'postgres',
  //     host: configService.get('DB_HOST'),
  //     port: +configService.get<number>('DB_PORT'),
  //     username: configService.get('DB_USERNAME'),
  //     password: configService.get('DB_PASSWORD'),
  //     database: configService.get('DB_DATABASE'),
  //     synchronize: configService.get('DB_SYNC'),
  //   }),
  //   inject: [ConfigService],
  // })],
