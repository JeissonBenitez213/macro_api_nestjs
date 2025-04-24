import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
  empleadosService: EmpleadosService;
  constructor(empleadosService: EmpleadosService) {
    this.empleadosService = empleadosService;
  }

  @Get('/')
  getEmpleados() {
    return this.empleadosService.getEmpleados();
  }

  @Post('/')
  postEmpleados(@Body() empleado: any) {
    return this.empleadosService.postEmpleados(empleado);
  }
}
