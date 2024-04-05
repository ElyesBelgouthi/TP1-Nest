import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CvModule,
    UserModule,
    SkillModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 1919,
      username: 'postgres',
      password: 'admin',
      database: 'TP1WEB',
      autoLoadEntities: true,
      entities: ['dist/**/*.entity.ts'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
