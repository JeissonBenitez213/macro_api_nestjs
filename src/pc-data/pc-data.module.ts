import { Module } from '@nestjs/common';
import { PcDataService } from './pc-data.service';
import { PcDataController } from './pc-data.controller';

@Module({
  controllers: [PcDataController],
  providers: [PcDataService],
})
export class PcDataModule {}
