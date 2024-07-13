import { Module } from '@nestjs/common'
import { EnvConfigModule } from '@/shared/infrastructure/env-config'

@Module({
  imports: [EnvConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
