import { Module } from '@nestjs/common';

import { CvModule } from 'src/cv/cv.module';
import { SkillModule } from 'src/skill/skill.module';
import { UserModule } from 'src/user/user.module';
import { SeedService } from './seed.service';

@Module({
  imports: [CvModule, SkillModule, UserModule],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
