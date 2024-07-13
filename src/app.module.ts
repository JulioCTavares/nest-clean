import { Module } from '@nestjs/common'
import { EnvConfigModule } from '@/shared/infrastructure/env-config'
import { UsersModule } from '@/users'

@Module({
  imports: [EnvConfigModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
