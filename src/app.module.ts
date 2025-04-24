import { Module } from '@nestjs/common';
import { EmpleadosModule } from './empleados/empleados.module';
import { PcDataService } from './pc-data/pc-data.service';
import { PcDataModule } from './pc-data/pc-data.module';

@Module({
  imports: [EmpleadosModule, PcDataModule],
  controllers: [],
  providers: [PcDataService],
})
export class AppModule {}
