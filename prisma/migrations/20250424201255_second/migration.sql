-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "Empleado" TEXT,
    "Correo" TEXT,
    "Contraseña" TEXT,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PcData" (
    "id" SERIAL NOT NULL,
    "ip" TEXT,
    "CPU" TEXT,
    "RAM" TEXT,
    "NombreEquipo" TEXT,
    "Usuario" TEXT,
    "SistemaOperativo" TEXT,
    "versionExcel" TEXT,
    "rutaApp" TEXT,
    "fechaHora" TIMESTAMP(3),
    "memoriaLibre" TEXT,
    "espacioDisco" TEXT,
    "direccionMAC" TEXT,
    "puertoAbierto" TEXT,
    "estadoRed" TEXT,
    "fechaInicioApp" TIMESTAMP(3),

    CONSTRAINT "PcData_pkey" PRIMARY KEY ("id")
);
