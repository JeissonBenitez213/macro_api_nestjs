import { Injectable } from '@nestjs/common';
import { prisma } from 'src/libs/prisma';

@Injectable()
export class EmpleadosService {
  getEmpleados() {
    return prisma.empleado.findMany();
  }

  postEmpleados(empleado: any) {
    return prisma.empleado.create({
      data: empleado,
    });
  }
}
