import { Body, Controller, Get, Post } from '@nestjs/common';
import { PcDataService } from './pc-data.service';

@Controller('pc-data')
export class PcDataController {
  pcDataService: PcDataService;
  constructor(pcDataService: PcDataService) {
    this.pcDataService = pcDataService;
  }

  @Get('/')
  async getPcData() {
    return this.pcDataService.getPcData();
  }

  @Post('/')
  async postPcData(@Body() pcData: any) {
    return this.pcDataService.postPcData(pcData);
  }
}
