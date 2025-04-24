import { Injectable } from '@nestjs/common';
import { prisma } from 'src/libs/prisma';
const si = require('systeminformation');

@Injectable()
export class PcDataService {
  async getPcData() {
    return prisma.pcData.findMany();
  }

  async postPcData(pcData: any) {
    const ip = await fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => data.ip)
      .catch(() => null);

    const fechaHora = pcData.fechaHora || new Date();

    const memoriaLibre = await si
      .mem()
      .then((data) => (data.available / 1024 / 1024).toFixed(3) + 'MB')
      .catch(() => null);

    const RAM = await si
      .mem()
      .then((data) => (data.total / 1024 / 1024 / 1024).toFixed(2) + ' GB')
      .catch(() => null);

    const CPU = await si
      .cpu()
      .then((data) => `${data.manufacturer} ${data.brand} ${data.speed}GHz`)
      .catch(() => null);

    const direccionMAC = await si
      .networkInterfaces()
      .then((data) => data?.[0]?.mac || null)
      .catch(() => null);

    const espacioDisco = await si
      .fsSize()
      .then(
        (data) => (data?.[0]?.available / 1024 / 1024 / 1024).toFixed(2) + 'GB',
      )
      .catch(() => null);

    const estadoRed = await si
      .networkStats()
      .then((data) => data?.[0]?.operstate || null)
      .catch(() => null);

    const puertoAbierto = await si
      .services('node,nginx,mysql') // puedes incluir más si quieres
      .then((data) => {
        const serviciosActivos = data.filter((s) => s.running);
        if (serviciosActivos.length > 0) {
          return serviciosActivos.map((s) => `${s.name}:${s.port}`).join(', ');
        }
        return null;
      });

    const fechaInicioApp = pcData.fechaInicioApp
      ? new Date(pcData.fechaInicioApp)
      : new Date();

    return prisma.pcData.create({
      data: {
        ...pcData,
        ip,
        fechaHora: new Date(fechaHora),
        memoriaLibre,
        direccionMAC,
        espacioDisco,
        estadoRed,
        puertoAbierto,
        RAM,
        CPU,
        fechaInicioApp,
      },
    });
  }
}
