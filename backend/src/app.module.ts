import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from "./notes/entities/note.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
