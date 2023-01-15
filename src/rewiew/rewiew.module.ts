import { Module } from '@nestjs/common';
import { RewiewController } from './rewiew.controller';

@Module({
  controllers: [RewiewController]
})
export class RewiewModule {}
