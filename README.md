# API MACROS

Aqui explicare las partes de la api

## API Reference

#### Modelo de los datos de prisma

[Ver modelos de Prisma](https://github.com/JeissonBenitez213/macro_api_nestjs/blob/main/prisma/schema.prisma)

| Parámetro          | Tipo        | Descripción                                                          |
| :----------------- | :---------- | :------------------------------------------------------------------- |
| `id`               | `int`       | Identificador único.                                                 |
| `ip`               | `string`    | Dirección IP local del equipo.                                       |
| `CPU`              | `String?`   | Información de la CPU.                                               |
| `RAM`              | `String?`   | Información sobre la memoria RAM.                                    |
| `NombreEquipo`     | `String?`   | Nombre del equipo.                                                   |
| `Usuario`          | `String?`   | Nombre del usuario.                                                  |
| `SistemaOperativo` | `String?`   | Sistema operativo del equipo.                                        |
| `versionExcel`     | `String?`   | Versión de Excel instalada (si aplica).                              |
| `rutaApp`          | `String?`   | Ruta de la aplicación (ejemplo: ruta de Excel).                      |
| `fechaHora`        | `DateTime?` | Fecha y hora actuales del sistema.                                   |
| `memoriaLibre`     | `String?`   | Memoria libre disponible en el sistema (si es accesible).            |
| `espacioDisco`     | `String?`   | Espacio libre en el disco duro.                                      |
| `direccionMAC`     | `String?`   | Dirección MAC de la tarjeta de red.                                  |
| `puertoAbierto`    | `String?`   | Información sobre puertos abiertos (si aplica).                      |
| `estadoRed`        | `String?`   | Estado de la conexión de red (ejemplo: "Conectado", "Desconectado"). |
| `fechaInicioApp`   | `DateTime?` | Fecha y hora en que se inició la aplicación.                         |

#### Modelo de empleados

| Parámetro    | Tipo      | Descripción                                 |
| :----------- | :-------- | :------------------------------------------ |
| `id`         | `Int`     | Identificador único (autoincremental).      |
| `Empleado`   | `String?` | Nombre del empleado (opcional).             |
| `Correo`     | `String?` | Correo electrónico del empleado (opcional). |
| `Contraseña` | `String?` | Contraseña del empleado (opcional).         |

## Servicios de la ruta de empleados

[Ver código](https://github.com/JeissonBenitez213/macro_api_nestjs/blob/main/src/empleados/empleados.service.ts)

```ts
import { Injectable } from '@nestjs/common'; //importacion de las dependencias necesarias
import { prisma } from 'src/libs/prisma'; //importacion de las dependencias necesarias

@Injectable()
export class EmpleadosService {
  getEmpleados() {
    return prisma.empleado.findMany(); //obtencion de todos los empleados
  }

  postEmpleados(empleado: any) {
    return prisma.empleado.create({
      //crear un empleado
      data: empleado,
    });
  }
}
```

## Servicios de la ruta de pc-data

[Ver código](https://github.com/JeissonBenitez213/macro_api_nestjs/blob/main/src/pc-data/pc-data.service.ts)

```ts
import { Injectable } from '@nestjs/common'; //importado de dependencias
import { prisma } from 'src/libs/prisma'; //importado de dependencias
const si = require('systeminformation'); //importado de dependencias

@Injectable()
export class PcDataService {
  async getPcData() {
    return prisma.pcData.findMany();
  }

  async postPcData(pcData: any) {
    const ip = await fetch('https://api.ipify.org?format=json') //consumo de api para la obtencion de la ip del pc
      .then((res) => res.json())
      .then((data) => data.ip)
      .catch(() => null);

    const memoriaLibre = await si //obtencion de datos de memoria
      .mem()
      .then((data) => (data.available / 1024 / 1024).toFixed(3) + 'MB')
      .catch(() => null);

    const RAM = await si //obtencion de la ram del equipo
      .mem()
      .then((data) => (data.total / 1024 / 1024 / 1024).toFixed(2) + ' GB')
      .catch(() => null);

    const CPU = await si //obtencion de la CPU
      .cpu()
      .then((data) => `${data.manufacturer} ${data.brand} ${data.speed}GHz`)
      .catch(() => null);

    const direccionMAC = await si //obtencion de la direccion MAC (puertos publicos)
      .networkInterfaces()
      .then((data) => data?.[0]?.mac || null)
      .catch(() => null);

    const espacioDisco = await si //obtencion del espacio en disco
      .fsSize()
      .then(
        (data) => (data?.[0]?.available / 1024 / 1024 / 1024).toFixed(2) + 'GB',
      )
      .catch(() => null);

    const estadoRed = await si //obtencion de los datos d ered
      .networkStats()
      .then((data) => data?.[0]?.operstate || null)
      .catch(() => null);

    const puertoAbierto = await si //obtencion si existe algun puerto abierto en el pc
      .services('node,nginx,mysql')
      .then((data) => {
        const serviciosActivos = data.filter((s) => s.running);
        if (serviciosActivos.length > 0) {
          return serviciosActivos.map((s) => `${s.name}:${s.port}`).join(', ');
        }
        return null;
      });

    const fechaInicioApp = pcData.fechaInicioApp //obtencion de la fecha de inicio de la app
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
```

## configuración de Prisma

[Ver Código](https://github.com/Sieghart205/nestjs/blob/main/libs/prisma.ts)

```ts
import { PrismaClient } from 'generated/prisma'; //importamos el cliente de prisma

export const prisma = new PrismaClient(); //uso de la funcion y su exportación
```

# Explicacion de macros de Excel

```vba
Private Sub CommandButton1_Click() ' ejecutar al dar click en el boton de enviar
    Rows(3).Insert ' insertar celda en la tabla
    Range("B3").Value = Empleado.Value ' capturar de datos
    Range("C3").Value = Correo.Value ' capturar de datos
    Range("D3").Value = Contraseña.Value ' capturar de datos

    Set http = CreateObject("MSXML2.XMLHTTP") ' crear objeto http para peticiones a la api

    jsondata = "{""Empleado"":""" & Empleado.Value & """, " & _
            """Correo"":""" & Correo.Value & """, " & _
            """Contraseña"":""" & Contraseña.Value & """}"
    Rem crear Json para enviar a la api

    Url = "https://macro-api-nestjs.onrender.com/empleados" ' Url de la api

    http.Open "POST", Url, False ' abrir una peticion a la api
    http.setRequestHeader "Content-Type", "application/json" ' crear encabezados que deben usarse
    http.Send jsondata ' envio de los datos json

    Empleado.Value = "" ' limpiar datos del formulario
    Correo.Value = "" ' limpiar datos del formulario
    Contraseña.Value = "" ' limpiar datos del formulario


End Sub
```

```vba
Sub MostrarFormulario()
    Application.OnTime Now + TimeValue("00:00:01"), "EnviarDatos" ' esperar un instante para que aparezca el formulario
    Formulario.Show ' abrir formulario
End Sub

Sub EnviarDatos() ' función de la api
    Dim nombreEquipo As String ' definir variables
    Dim usuario As String ' definir variables
    Dim sistemaOperativo As String ' definir variables
    Dim rutaExcel As String ' definir variables
    Dim versionExcel As String ' definir variables
    Dim fechaActual As String ' definir variables

    nombreEquipo = Environ("COMPUTERNAME") ' llamar al nombre del equipo
    usuario = Environ("USERNAME") ' obtener sistema operativo
    sistemaOperativo = CreateObject("WScript.Shell").RegRead("HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProductName") ' obtener sistema operativo
    rutaExcel = Application.Path ' ruta de la aplicación
    rutaExcel = Replace(rutaExcel, "\", "\\") ' reemplazar las rutas para que la api la reciba correctamente
    versionExcel = Application.Version ' versión de la app
    fechaActual = Format(Now, "yyyy-mm-dd\THH:MM:SS") ' crear fecha actual

    Set http = CreateObject("MSXML2.XMLHTTP") ' crear objeto http


    jsondata = "{""NombreEquipo"":""" & nombreEquipo & """, " & _
               """Usuario"":""" & usuario & """, " & _
               """SistemaOperativo"":""" & sistemaOperativo & """, " & _
               """rutaApp"":""" & rutaExcel & """, " & _
               """versionExcel"":""" & versionExcel & """, " & _
               """fechaHora"":""" & fechaActual & """}"
    Rem crear json

    Url = "https://macro-api-nestjs.onrender.com/pc-data/" ' definir url

    http.Open "POST", Url, False ' abrir peticion post
    http.setRequestHeader "Content-Type", "application/json" ' crear encabezados
    http.Send jsondata ' enviar los datos
End Sub
```

## Autores

- Jeisson Benitez
