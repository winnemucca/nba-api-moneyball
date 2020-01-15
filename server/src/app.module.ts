import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.
    forRoot('mongodb+srv://skauyedauty:morbssss@cluster0-l5nf2.mongodb.net/nestjs-demo?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
