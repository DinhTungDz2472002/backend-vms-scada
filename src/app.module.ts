import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DeviceModule} from "./devices/device.module"
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DeviceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
