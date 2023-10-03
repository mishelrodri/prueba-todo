/*
 Navicat Premium Data Transfer

 Source Server         : Postgresql
 Source Server Type    : PostgreSQL
 Source Server Version : 140007
 Source Host           : localhost:5432
 Source Catalog        : clinica-fmp
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140007
 File Encoding         : 65001

 Date: 02/10/2023 23:45:30
*/


-- ----------------------------
-- Sequence structure for especialidad_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."especialidad_seq";
CREATE SEQUENCE "public"."especialidad_seq" 
INCREMENT 50
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for modulo_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."modulo_id_seq";
CREATE SEQUENCE "public"."modulo_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for referencia_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."referencia_seq";
CREATE SEQUENCE "public"."referencia_seq" 
INCREMENT 50
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for actividades
-- ----------------------------
DROP TABLE IF EXISTS "public"."actividades";
CREATE TABLE "public"."actividades" (
  "fecha" date,
  "masa_corporal" int4 NOT NULL,
  "peso" int4 NOT NULL,
  "talla" int4 NOT NULL,
  "temperatura" int4 NOT NULL,
  "tension_arterial" int4 NOT NULL,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "personal_salud_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of actividades
-- ----------------------------
INSERT INTO "public"."actividades" VALUES ('2023-10-03', 20, 20, 20, 20, 20, '20231002201217604', '20230913193604039');

-- ----------------------------
-- Table structure for bitacora
-- ----------------------------
DROP TABLE IF EXISTS "public"."bitacora";
CREATE TABLE "public"."bitacora" (
  "fecha" timestamp(6),
  "accion" varchar(255) COLLATE "pg_catalog"."default",
  "hora" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_usuario" varchar(255) COLLATE "pg_catalog"."default",
  "ip" varchar(255) COLLATE "pg_catalog"."default",
  "ruta" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of bitacora
-- ----------------------------

-- ----------------------------
-- Table structure for carrera
-- ----------------------------
DROP TABLE IF EXISTS "public"."carrera";
CREATE TABLE "public"."carrera" (
  "tipo" bool NOT NULL,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_facultad" varchar(255) COLLATE "pg_catalog"."default",
  "nombre" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of carrera
-- ----------------------------
INSERT INTO "public"."carrera" VALUES ('t', '20231001215754947', '20231001210129224', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001215927036', '20231001210129224', 'Docente ');
INSERT INTO "public"."carrera" VALUES ('t', '20231001215935577', '20231001210129224', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220720241', '20231001210143356', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220745797', '20231001210143356', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220751439', '20231001210143356', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220830905', '20231001210153582', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220845203', '20231001210153582', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001220851512', '20231001210153582', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221036129', '20231001210203098', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221050128', '20231001210203098', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221055203', '20231001210203098', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221123976', '20231001210214079', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221129757', '20231001210214079', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221135100', '20231001210214079', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221202804', '20231001210223835', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221212851', '20231001210223835', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221220768', '20231001210223835', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221239620', '20231001210232450', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221246504', '20231001210232450', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221251739', '20231001210232450', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221316086', '20231001210243690', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221324637', '20231001210243690', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221329648', '20231001210243690', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221344573', '20231001210254594', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221352248', '20231001210254594', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221357826', '20231001210254594', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221407383', '20231001210305785', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221416693', '20231001210305785', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221419803', '20231001210305785', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221439938', '20231001210315918', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221500367', '20231001210315918', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221506819', '20231001210315918', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221520186', '20231001210325120', 'Seguridad');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221529098', '20231001210325120', 'Docente');
INSERT INTO "public"."carrera" VALUES ('t', '20231001221534187', '20231001210325120', 'Administrativo');
INSERT INTO "public"."carrera" VALUES ('f', '20231001231724476', '20231001210143356', 'OTRA');

-- ----------------------------
-- Table structure for censo_diario_de_consulta
-- ----------------------------
DROP TABLE IF EXISTS "public"."censo_diario_de_consulta";
CREATE TABLE "public"."censo_diario_de_consulta" (
  "emergencia" bool NOT NULL,
  "fecha" date,
  "incapacidad" bool NOT NULL,
  "num_receta" int4 NOT NULL,
  "primeraconsulta" bool NOT NULL,
  "area" varchar(255) COLLATE "pg_catalog"."default",
  "certificacion_id" varchar(255) COLLATE "pg_catalog"."default",
  "diagnostico" varchar(255) COLLATE "pg_catalog"."default",
  "estado_nutricional" varchar(255) COLLATE "pg_catalog"."default",
  "expediente_id" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "jornada_id" varchar(255) COLLATE "pg_catalog"."default",
  "personal_salud_id" varchar(255) COLLATE "pg_catalog"."default",
  "referencia_id" varchar(255) COLLATE "pg_catalog"."default",
  "vicio" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of censo_diario_de_consulta
-- ----------------------------
INSERT INTO "public"."censo_diario_de_consulta" VALUES ('f', '2023-10-01', 'f', 9, 't', NULL, '20231001233827181', 'nada', NULL, NULL, '20231001233852322', NULL, '20230913193604039', NULL, NULL);
INSERT INTO "public"."censo_diario_de_consulta" VALUES ('t', '2023-10-01', 'f', 8, 'f', NULL, NULL, 'hgfjhf jhghjfjhfjhf fhjg', NULL, '20231001233835552', '20231001233925565', NULL, '20230913193604039', NULL, NULL);

-- ----------------------------
-- Table structure for censo_grupo
-- ----------------------------
DROP TABLE IF EXISTS "public"."censo_grupo";
CREATE TABLE "public"."censo_grupo" (
  "cendo_id" varchar(255) COLLATE "pg_catalog"."default",
  "grupo_id" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of censo_grupo
-- ----------------------------
INSERT INTO "public"."censo_grupo" VALUES ('20231001233852322', '20230930173142576', '20231002233042629');
INSERT INTO "public"."censo_grupo" VALUES ('20231001233925565', '20230930173142576', '20231002233042715');

-- ----------------------------
-- Table structure for certificacion
-- ----------------------------
DROP TABLE IF EXISTS "public"."certificacion";
CREATE TABLE "public"."certificacion" (
  "certificado" bool,
  "estado" bool,
  "fecha" date,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "numero_expediente" varchar(255) COLLATE "pg_catalog"."default",
  "paciente_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of certificacion
-- ----------------------------
INSERT INTO "public"."certificacion" VALUES ('f', 't', '2023-10-01', '20231001233827181', 'Nuevo2023001', '20231001231817324');

-- ----------------------------
-- Table structure for curaciones
-- ----------------------------
DROP TABLE IF EXISTS "public"."curaciones";
CREATE TABLE "public"."curaciones" (
  "fecha" date,
  "curacion_realizada" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_paciente" varchar(255) COLLATE "pg_catalog"."default",
  "personal_salud_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of curaciones
-- ----------------------------
INSERT INTO "public"."curaciones" VALUES ('2023-10-03', 'ALGO ', '20231002201143562', '20231001231817324', '20230913193604039');
INSERT INTO "public"."curaciones" VALUES ('2023-10-03', 'XXXXXX', '20231002201154344', '20231001232014699', '20230913193604039');

-- ----------------------------
-- Table structure for especialidad
-- ----------------------------
DROP TABLE IF EXISTS "public"."especialidad";
CREATE TABLE "public"."especialidad" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_referencia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of especialidad
-- ----------------------------

-- ----------------------------
-- Table structure for expediente
-- ----------------------------
DROP TABLE IF EXISTS "public"."expediente";
CREATE TABLE "public"."expediente" (
  "estado" bool,
  "fecha" date,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "numero_expediente" varchar(255) COLLATE "pg_catalog"."default",
  "paciente_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of expediente
-- ----------------------------
INSERT INTO "public"."expediente" VALUES ('t', '2023-10-01', '20231001233835552', '2023001', '20231001232014699');

-- ----------------------------
-- Table structure for expediente_familia
-- ----------------------------
DROP TABLE IF EXISTS "public"."expediente_familia";
CREATE TABLE "public"."expediente_familia" (
  "expediente_id" varchar(255) COLLATE "pg_catalog"."default",
  "familia_id" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of expediente_familia
-- ----------------------------

-- ----------------------------
-- Table structure for facultad
-- ----------------------------
DROP TABLE IF EXISTS "public"."facultad";
CREATE TABLE "public"."facultad" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of facultad
-- ----------------------------
INSERT INTO "public"."facultad" VALUES ('20231001210129224', 'Facultad de Ciencias y Humanidades');
INSERT INTO "public"."facultad" VALUES ('20231001210143356', 'Facultad Multidisciplinaria de Oriente');
INSERT INTO "public"."facultad" VALUES ('20231001210153582', 'Facultad de Ingeníeria y Arquitectura');
INSERT INTO "public"."facultad" VALUES ('20231001210203098', 'Facultad de Agronomía');
INSERT INTO "public"."facultad" VALUES ('20231001210214079', 'Facultad de Odontología');
INSERT INTO "public"."facultad" VALUES ('20231001210223835', 'Facultad de Medicina');
INSERT INTO "public"."facultad" VALUES ('20231001210232450', 'Facultad Multidisciplinaria Paracentral');
INSERT INTO "public"."facultad" VALUES ('20231001210243690', 'Facultad de Jurisprudencia y Ciencias Sociales');
INSERT INTO "public"."facultad" VALUES ('20231001210254594', 'Facultad de Química y Farmacia');
INSERT INTO "public"."facultad" VALUES ('20231001210305785', 'Facultad de Ciencias Naturales y Matemática');
INSERT INTO "public"."facultad" VALUES ('20231001210315918', 'Facultad Multidisciplinaria de Occidente');
INSERT INTO "public"."facultad" VALUES ('20231001210325120', 'Facultad de Ciencias Económicas');

-- ----------------------------
-- Table structure for familia
-- ----------------------------
DROP TABLE IF EXISTS "public"."familia";
CREATE TABLE "public"."familia" (
  "apellido" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "parentesco" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of familia
-- ----------------------------

-- ----------------------------
-- Table structure for grupo_diagnostico
-- ----------------------------
DROP TABLE IF EXISTS "public"."grupo_diagnostico";
CREATE TABLE "public"."grupo_diagnostico" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_grupo" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of grupo_diagnostico
-- ----------------------------
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230930173142576', 'Bronquitis aguda');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230930173100680', 'Resfriado común');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230930173034751', 'Infección de oído');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230930173009177', 'Influenza ');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230930172947907', 'Infecciones de la piel');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230929202759852', 'Dolor de garganta');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230929222631224', 'Infección urinaria');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230927224148334', 'Tos');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230927224101559', 'Sinusitis bacteriana');
INSERT INTO "public"."grupo_diagnostico" VALUES ('20230913155925193', 'Bronquiolitis');

-- ----------------------------
-- Table structure for inyectable
-- ----------------------------
DROP TABLE IF EXISTS "public"."inyectable";
CREATE TABLE "public"."inyectable" (
  "fecha" date,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_paciente" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "jeringa" varchar(255) COLLATE "pg_catalog"."default",
  "medicamento" varchar(255) COLLATE "pg_catalog"."default",
  "personal_salud_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of inyectable
-- ----------------------------

-- ----------------------------
-- Table structure for jornada_medica
-- ----------------------------
DROP TABLE IF EXISTS "public"."jornada_medica";
CREATE TABLE "public"."jornada_medica" (
  "fecha" date,
  "fecha_nacimiento" date,
  "apellido_paciente" varchar(255) COLLATE "pg_catalog"."default",
  "genero" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_facultad" varchar(255) COLLATE "pg_catalog"."default",
  "nombre_paciente" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of jornada_medica
-- ----------------------------
INSERT INTO "public"."jornada_medica" VALUES ('2023-10-03', '2000-12-12', 'Sanchez', 'femenino', '20231002201017043', '20231001210223835', 'Manuela XXX');
INSERT INTO "public"."jornada_medica" VALUES ('2023-10-02', '2000-02-02', 'Peréz XX', 'femenino', '20231002201051286', '20231001210223835', 'Manuela XX');

-- ----------------------------
-- Table structure for modulo
-- ----------------------------
DROP TABLE IF EXISTS "public"."modulo";
CREATE TABLE "public"."modulo" (
  "id" int8 NOT NULL DEFAULT nextval('modulo_id_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of modulo
-- ----------------------------
INSERT INTO "public"."modulo" VALUES (1, 'Expediente');
INSERT INTO "public"."modulo" VALUES (3, 'Consultas');
INSERT INTO "public"."modulo" VALUES (2, 'Censo');
INSERT INTO "public"."modulo" VALUES (4, 'General');
INSERT INTO "public"."modulo" VALUES (5, 'Actividades');

-- ----------------------------
-- Table structure for paciente
-- ----------------------------
DROP TABLE IF EXISTS "public"."paciente";
CREATE TABLE "public"."paciente" (
  "estado" bool,
  "f_nacimiento" date,
  "tipo" int4 NOT NULL,
  "apellido" varchar(255) COLLATE "pg_catalog"."default",
  "direccion" varchar(255) COLLATE "pg_catalog"."default",
  "due" varchar(255) COLLATE "pg_catalog"."default",
  "dui" varchar(255) COLLATE "pg_catalog"."default",
  "estado_civil" varchar(255) COLLATE "pg_catalog"."default",
  "genero" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_carrera" varchar(255) COLLATE "pg_catalog"."default",
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "telefono" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of paciente
-- ----------------------------
INSERT INTO "public"."paciente" VALUES ('t', '2000-01-23', 1, 'Carpio Otro', 'NOSE DONDE VIVE', 'CG67544', '43243535-4', 'viudo', 'femenino', '20231001231817324', '20231001231724476', 'Sandra Susana', '2345-6555');
INSERT INTO "public"."paciente" VALUES ('t', '2000-02-20', 1, 'NAD NADAV', 'WADSDS BFHSF SAFYUD GFUYGDS', 'CG67546', '23456787-6', 'casado', 'femenino', '20231001232014699', '20231001231724476', 'NADA NADA', '7777-8888');

-- ----------------------------
-- Table structure for permiso
-- ----------------------------
DROP TABLE IF EXISTS "public"."permiso";
CREATE TABLE "public"."permiso" (
  "modulo_id" int8,
  "nombre_permiso" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "id_permiso" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of permiso
-- ----------------------------
INSERT INTO "public"."permiso" VALUES (1, 'Nuevo Ingreso', '20230910230310444');
INSERT INTO "public"."permiso" VALUES (1, 'Antiguo Ingreso', '20230913230310444');
INSERT INTO "public"."permiso" VALUES (3, 'Consulta médica por edad', '20555667778888899');
INSERT INTO "public"."permiso" VALUES (2, 'Pacientes', '87875674535789022');
INSERT INTO "public"."permiso" VALUES (2, 'Jornada Médica', '87654333456788888');
INSERT INTO "public"."permiso" VALUES (2, 'Censo Médico', '87867545345676767');
INSERT INTO "public"."permiso" VALUES (5, 'Curaciones', '32434324354354355');
INSERT INTO "public"."permiso" VALUES (5, 'Inyecciones', '34325435435646563');
INSERT INTO "public"."permiso" VALUES (5, 'Actividades Enfermeria', '23234343253454555');
INSERT INTO "public"."permiso" VALUES (3, '10 Primeras Causas de Morbilidad', '23238363537826242');
INSERT INTO "public"."permiso" VALUES (3, 'Actividades médicas totales', '23479273838263262');
INSERT INTO "public"."permiso" VALUES (3, 'Actividades médicas diarias', '23457843876545678');
INSERT INTO "public"."permiso" VALUES (4, 'Carrera', '26562565624524222');

-- ----------------------------
-- Table structure for permiso_rol
-- ----------------------------
DROP TABLE IF EXISTS "public"."permiso_rol";
CREATE TABLE "public"."permiso_rol" (
  "crear" bool NOT NULL,
  "editar" bool NOT NULL,
  "eliminar" bool NOT NULL,
  "ver" bool NOT NULL,
  "id_rol_permiso" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "permiso_id" varchar(255) COLLATE "pg_catalog"."default",
  "rol_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of permiso_rol
-- ----------------------------
INSERT INTO "public"."permiso_rol" VALUES ('t', 't', 't', 't', '20231002232733396', '87654333456788888', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('f', 'f', 'f', 't', '20231002232733377', '20555667778888899', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('f', 'f', 'f', 't', '20231002232733383', '23238363537826242', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 'f', 't', 't', '20231002232733407', '32434324354354355', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 't', 't', 't', '20231002232733372', '20230913230310444', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 't', 't', 't', '20231002232733402', '87867545345676767', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('f', 'f', 'f', 't', '20231002232733390', '87875674535789022', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 't', 't', 't', '20231002232733412', '34325435435646563', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 't', 't', 't', '20231002232733417', '23234343253454555', '20230913194730899');
INSERT INTO "public"."permiso_rol" VALUES ('t', 'f', 't', 't', '20231002232733365', '20230910230310444', '20230913194730899');

-- ----------------------------
-- Table structure for personal_salud
-- ----------------------------
DROP TABLE IF EXISTS "public"."personal_salud";
CREATE TABLE "public"."personal_salud" (
  "estado" bool,
  "apellido" varchar(255) COLLATE "pg_catalog"."default",
  "cargo" varchar(255) COLLATE "pg_catalog"."default",
  "dui" varchar(255) COLLATE "pg_catalog"."default",
  "funcion" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "telefono" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of personal_salud
-- ----------------------------
INSERT INTO "public"."personal_salud" VALUES ('t', 'Comayagua', 'medico', '44677899-8', 'MEDICO', '20230913193604039', 'Cristian', '44677899-8');
INSERT INTO "public"."personal_salud" VALUES ('t', 'Polen', 'Enfermera', '12345678-9', 'ENFERMERA', '20230924223223988', 'Jubelian', '7777-8885');

-- ----------------------------
-- Table structure for referencia
-- ----------------------------
DROP TABLE IF EXISTS "public"."referencia";
CREATE TABLE "public"."referencia" (
  "centro_medico" varchar(255) COLLATE "pg_catalog"."default",
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of referencia
-- ----------------------------
INSERT INTO "public"."referencia" VALUES ('Hospital Nacional Santa Gertrudiz', '20230913155925193');
INSERT INTO "public"."referencia" VALUES ('Hospital Nacional de Fatima', '20230913171218820');

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS "public"."rol";
CREATE TABLE "public"."rol" (
  "rol_nombre" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO "public"."rol" VALUES ('Operador', '20230913155925193');
INSERT INTO "public"."rol" VALUES ('Consultor', '20230913171218820');
INSERT INTO "public"."rol" VALUES ('Enfermera', '20230913171223822');
INSERT INTO "public"."rol" VALUES ('Doctor', '20230913194730899');
INSERT INTO "public"."rol" VALUES ('Administrador', '20230917160240423');

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuario";
CREATE TABLE "public"."usuario" (
  "nombre_usuario" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "personal_salud_id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "rol_id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "token_password" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO "public"."usuario" VALUES ('rp18027', 'rp18027@ues.edu.sv', '20230913195036106', '$2a$10$yGXiar/DibVQJ2BiXEAd8O.Ean2ZugKj.z4sP9lyF3udpKiHC.P6u', '20230913193604039', '20230917160240423', NULL);
INSERT INTO "public"."usuario" VALUES ('jb7777', 'tr5679@ues.edu.sv', '20230924223255181', '$2a$10$fAplNaS/vs34/MNnZyUpbeRUMO4uGAp12C25.xyIH1QhFQt6./STy', '20230924223223988', '20230913194730899', NULL);

-- ----------------------------
-- View structure for vista_censo
-- ----------------------------
DROP VIEW IF EXISTS "public"."vista_censo";
CREATE VIEW "public"."vista_censo" AS  SELECT cd.id,
    ( SELECT certificacion.numero_expediente
           FROM certificacion
          WHERE certificacion.id::text = cd.certificacion_id::text) AS numerocertificacion,
    ( SELECT expediente.numero_expediente
           FROM expediente
          WHERE expediente.id::text = cd.expediente_id::text) AS numeroexpediente,
    ( SELECT concat(paciente.nombre, ' ', paciente.apellido) AS concat
           FROM certificacion
             JOIN paciente ON paciente.id::text = certificacion.paciente_id::text
          WHERE certificacion.id::text = cd.certificacion_id::text) AS nombrecertificacion,
    ( SELECT concat(paciente.nombre, ' ', paciente.apellido) AS concat
           FROM expediente
             JOIN paciente ON paciente.id::text = expediente.paciente_id::text
          WHERE expediente.id::text = cd.expediente_id::text) AS nombreexpediente,
    ( SELECT concat(jornada_medica.nombre_paciente, ' ', jornada_medica.apellido_paciente) AS concat
           FROM jornada_medica
          WHERE jornada_medica.id::text = cd.jornada_id::text) AS nombrejornada,
    ( SELECT facultad.nombre
           FROM certificacion
             JOIN paciente ON certificacion.paciente_id::text = paciente.id::text
             JOIN carrera ON paciente.id_carrera::text = carrera.id::text
             JOIN facultad ON carrera.id_facultad::text = facultad.id::text
          WHERE certificacion.id::text = cd.certificacion_id::text) AS facultadcertificacion,
    ( SELECT facultad.nombre
           FROM expediente
             JOIN paciente ON expediente.paciente_id::text = paciente.id::text
             JOIN carrera ON paciente.id_carrera::text = carrera.id::text
             JOIN facultad ON carrera.id_facultad::text = facultad.id::text
          WHERE expediente.id::text = cd.expediente_id::text) AS facultadexpediente,
    ( SELECT jornada_medica.id_facultad
           FROM jornada_medica
          WHERE jornada_medica.id::text = cd.jornada_id::text) AS idfacultad,
    ( SELECT facultad.nombre
           FROM jornada_medica
             JOIN facultad ON jornada_medica.id_facultad::text = facultad.id::text
          WHERE jornada_medica.id::text = cd.jornada_id::text) AS facultadjornada,
    ( SELECT round(date_part('year'::text, age(paciente.f_nacimiento::timestamp with time zone)))::integer AS round
           FROM certificacion
             JOIN paciente ON paciente.id::text = certificacion.paciente_id::text
          WHERE certificacion.id::text = cd.certificacion_id::text) AS edadcertificacion,
    ( SELECT round(date_part('year'::text, age(paciente.f_nacimiento::timestamp with time zone)))::integer AS round
           FROM expediente
             JOIN paciente ON paciente.id::text = expediente.paciente_id::text
          WHERE expediente.id::text = cd.expediente_id::text) AS edadexpediente,
    ( SELECT date_part('year'::text, age(jornada_medica.fecha_nacimiento::timestamp with time zone))::integer AS date_part
           FROM jornada_medica
          WHERE jornada_medica.id::text = cd.jornada_id::text) AS edadjornada,
    ( SELECT paciente.genero
           FROM certificacion
             JOIN paciente ON paciente.id::text = certificacion.paciente_id::text
          WHERE certificacion.id::text = cd.certificacion_id::text) AS generocertificacion,
    ( SELECT paciente.genero
           FROM expediente
             JOIN paciente ON paciente.id::text = expediente.paciente_id::text
          WHERE expediente.id::text = cd.expediente_id::text) AS generoexpediente,
    ( SELECT jornada_medica.genero
           FROM jornada_medica
          WHERE jornada_medica.id::text = cd.jornada_id::text) AS generojornada,
    cd.primeraconsulta,
    cd.emergencia,
    cd.num_receta,
    cd.incapacidad,
    ( SELECT referencia.id
           FROM referencia
          WHERE referencia.id::text = cd.referencia_id::text) AS idreferencia,
    ( SELECT referencia.centro_medico
           FROM referencia
          WHERE referencia.id::text = cd.referencia_id::text) AS centromedico,
    cd.diagnostico,
    cd.fecha,
    cd.certificacion_id,
    cd.expediente_id,
    cd.jornada_id,
    cd.personal_salud_id,
    cd.referencia_id,
    ( SELECT paciente.tipo
           FROM expediente
             JOIN paciente ON paciente.id::text = expediente.paciente_id::text
          WHERE expediente.id::text = cd.expediente_id::text) AS tpaciente2,
    cd.area,
    cd.estado_nutricional,
    cd.vicio
   FROM censo_diario_de_consulta cd;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."especialidad_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."modulo_id_seq"
OWNED BY "public"."modulo"."id";
SELECT setval('"public"."modulo_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."referencia_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table actividades
-- ----------------------------
ALTER TABLE "public"."actividades" ADD CONSTRAINT "actividades_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table bitacora
-- ----------------------------
ALTER TABLE "public"."bitacora" ADD CONSTRAINT "bitacora_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table carrera
-- ----------------------------
ALTER TABLE "public"."carrera" ADD CONSTRAINT "carrera_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Checks structure for table censo_diario_de_consulta
-- ----------------------------
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "censo_diario_de_consulta_vicio_check" CHECK (vicio::text = ANY (ARRAY['ALCOHOL'::character varying::text, 'DROGAS'::character varying::text, 'TABACO'::character varying::text, 'OTRO'::character varying::text, 'ALCOHOL_DROGAS'::character varying::text, 'ALCOHOL_TABACO'::character varying::text, 'ALCOHOL_OTRO'::character varying::text, 'DROGAS_TABACO'::character varying::text, 'DROGAS_OTRO'::character varying::text, 'OTRO_TABACO'::character varying::text, 'ALCOHOL_DROGAS_TABACO'::character varying::text, 'ALCOHOL_DROGAS_TABACO_OTRO'::character varying::text]));

-- ----------------------------
-- Primary Key structure for table censo_diario_de_consulta
-- ----------------------------
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "censo_diario_de_consulta_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table censo_grupo
-- ----------------------------
ALTER TABLE "public"."censo_grupo" ADD CONSTRAINT "censo_grupo_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table certificacion
-- ----------------------------
ALTER TABLE "public"."certificacion" ADD CONSTRAINT "certificacion_numero_expediente_key" UNIQUE ("numero_expediente");

-- ----------------------------
-- Primary Key structure for table certificacion
-- ----------------------------
ALTER TABLE "public"."certificacion" ADD CONSTRAINT "certificacion_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table curaciones
-- ----------------------------
ALTER TABLE "public"."curaciones" ADD CONSTRAINT "curaciones_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table especialidad
-- ----------------------------
ALTER TABLE "public"."especialidad" ADD CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table expediente
-- ----------------------------
ALTER TABLE "public"."expediente" ADD CONSTRAINT "expediente_numero_expediente_key" UNIQUE ("numero_expediente");

-- ----------------------------
-- Primary Key structure for table expediente
-- ----------------------------
ALTER TABLE "public"."expediente" ADD CONSTRAINT "expediente_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table expediente_familia
-- ----------------------------
ALTER TABLE "public"."expediente_familia" ADD CONSTRAINT "expediente_familia_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table facultad
-- ----------------------------
ALTER TABLE "public"."facultad" ADD CONSTRAINT "facultad_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table familia
-- ----------------------------
ALTER TABLE "public"."familia" ADD CONSTRAINT "familia_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table grupo_diagnostico
-- ----------------------------
ALTER TABLE "public"."grupo_diagnostico" ADD CONSTRAINT "grupo_diagnostico_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table inyectable
-- ----------------------------
ALTER TABLE "public"."inyectable" ADD CONSTRAINT "inyectable_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table jornada_medica
-- ----------------------------
ALTER TABLE "public"."jornada_medica" ADD CONSTRAINT "jornada_medica_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table modulo
-- ----------------------------
ALTER TABLE "public"."modulo" ADD CONSTRAINT "modulo_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table paciente
-- ----------------------------
ALTER TABLE "public"."paciente" ADD CONSTRAINT "paciente_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table permiso
-- ----------------------------
ALTER TABLE "public"."permiso" ADD CONSTRAINT "permiso_pkey" PRIMARY KEY ("id_permiso");

-- ----------------------------
-- Primary Key structure for table permiso_rol
-- ----------------------------
ALTER TABLE "public"."permiso_rol" ADD CONSTRAINT "permiso_rol_pkey" PRIMARY KEY ("id_rol_permiso");

-- ----------------------------
-- Uniques structure for table personal_salud
-- ----------------------------
ALTER TABLE "public"."personal_salud" ADD CONSTRAINT "personal_salud_dui_key" UNIQUE ("dui");
ALTER TABLE "public"."personal_salud" ADD CONSTRAINT "personal_salud_telefono_key" UNIQUE ("telefono");

-- ----------------------------
-- Checks structure for table personal_salud
-- ----------------------------
ALTER TABLE "public"."personal_salud" ADD CONSTRAINT "personal_salud_funcion_check" CHECK (funcion::text = ANY (ARRAY['MEDICO'::character varying::text, 'ENFERMERA'::character varying::text, 'OTRO'::character varying::text]));

-- ----------------------------
-- Primary Key structure for table personal_salud
-- ----------------------------
ALTER TABLE "public"."personal_salud" ADD CONSTRAINT "personal_salud_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table referencia
-- ----------------------------
ALTER TABLE "public"."referencia" ADD CONSTRAINT "referencia_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table rol
-- ----------------------------
ALTER TABLE "public"."rol" ADD CONSTRAINT "rol_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_nombre_usuario_key" UNIQUE ("nombre_usuario");
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_personal_salud_id_key" UNIQUE ("personal_salud_id");

-- ----------------------------
-- Primary Key structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table actividades
-- ----------------------------
ALTER TABLE "public"."actividades" ADD CONSTRAINT "fkn3d8xvogud7lr0u4ooitgxy9s" FOREIGN KEY ("personal_salud_id") REFERENCES "public"."personal_salud" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table bitacora
-- ----------------------------
ALTER TABLE "public"."bitacora" ADD CONSTRAINT "fk8f6lcny5g2e6tknq7dhtx2wsq" FOREIGN KEY ("id_usuario") REFERENCES "public"."usuario" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table carrera
-- ----------------------------
ALTER TABLE "public"."carrera" ADD CONSTRAINT "fk452pr2tmhb1k4prib52ur2uqg" FOREIGN KEY ("id_facultad") REFERENCES "public"."facultad" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table censo_diario_de_consulta
-- ----------------------------
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "fk31747ky3cmdnej9n5evkjn1y4" FOREIGN KEY ("expediente_id") REFERENCES "public"."expediente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "fk4o4u4k9y2lxtdq7393t0jww11" FOREIGN KEY ("personal_salud_id") REFERENCES "public"."personal_salud" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "fkb43krm8rccsg8edhj6j8y04ty" FOREIGN KEY ("jornada_id") REFERENCES "public"."jornada_medica" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "fkgtudcb1k1yp90loktrp5yfs2s" FOREIGN KEY ("referencia_id") REFERENCES "public"."referencia" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."censo_diario_de_consulta" ADD CONSTRAINT "fkl29iqscwtca0oc8sixi8ciacn" FOREIGN KEY ("certificacion_id") REFERENCES "public"."certificacion" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table censo_grupo
-- ----------------------------
ALTER TABLE "public"."censo_grupo" ADD CONSTRAINT "fkdw0i04rl2dkw3k3q3ma4qcus5" FOREIGN KEY ("grupo_id") REFERENCES "public"."grupo_diagnostico" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."censo_grupo" ADD CONSTRAINT "fktcgmq75a1wbnyg10pimdsue2e" FOREIGN KEY ("cendo_id") REFERENCES "public"."censo_diario_de_consulta" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table certificacion
-- ----------------------------
ALTER TABLE "public"."certificacion" ADD CONSTRAINT "fkih0kjf2lbkl22dtug1fs83gw" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table curaciones
-- ----------------------------
ALTER TABLE "public"."curaciones" ADD CONSTRAINT "fk67sg5rljjkba38kcyj5hefe4p" FOREIGN KEY ("personal_salud_id") REFERENCES "public"."personal_salud" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."curaciones" ADD CONSTRAINT "fkpnayoyjfvw1sddl4e86n4fi4j" FOREIGN KEY ("id_paciente") REFERENCES "public"."paciente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table especialidad
-- ----------------------------
ALTER TABLE "public"."especialidad" ADD CONSTRAINT "fk_referencia" FOREIGN KEY ("id_referencia") REFERENCES "public"."referencia" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table expediente
-- ----------------------------
ALTER TABLE "public"."expediente" ADD CONSTRAINT "fkoymfvp1w6q4jyaeru6wgh2cn7" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table expediente_familia
-- ----------------------------
ALTER TABLE "public"."expediente_familia" ADD CONSTRAINT "fkdp5iuf0g4af230l8uob0d4542" FOREIGN KEY ("expediente_id") REFERENCES "public"."expediente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."expediente_familia" ADD CONSTRAINT "fktqdxb1noq78r4i01o3t7buiqp" FOREIGN KEY ("familia_id") REFERENCES "public"."familia" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table inyectable
-- ----------------------------
ALTER TABLE "public"."inyectable" ADD CONSTRAINT "fk_inyectable_paciente" FOREIGN KEY ("id_paciente") REFERENCES "public"."paciente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."inyectable" ADD CONSTRAINT "fka4ebrehijrmy3a1w63osirkms" FOREIGN KEY ("personal_salud_id") REFERENCES "public"."personal_salud" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table jornada_medica
-- ----------------------------
ALTER TABLE "public"."jornada_medica" ADD CONSTRAINT "fkcfcyogdfayl46yiyd422tbv7g" FOREIGN KEY ("id_facultad") REFERENCES "public"."facultad" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table paciente
-- ----------------------------
ALTER TABLE "public"."paciente" ADD CONSTRAINT "fkl67hgi5f4vd2k6vmvtf5656wr" FOREIGN KEY ("id_carrera") REFERENCES "public"."carrera" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table permiso
-- ----------------------------
ALTER TABLE "public"."permiso" ADD CONSTRAINT "fkevtdh8bm49avdyf7wqd08myh" FOREIGN KEY ("modulo_id") REFERENCES "public"."modulo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table permiso_rol
-- ----------------------------
ALTER TABLE "public"."permiso_rol" ADD CONSTRAINT "fk4ngehdlselc6uwg9kh1xc45wq" FOREIGN KEY ("rol_id") REFERENCES "public"."rol" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."permiso_rol" ADD CONSTRAINT "fkh52qkt8liov8gf01mkq9ms926" FOREIGN KEY ("permiso_id") REFERENCES "public"."permiso" ("id_permiso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "fkr1s0c63ye7ux7fny7qxe8qh6g" FOREIGN KEY ("personal_salud_id") REFERENCES "public"."personal_salud" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."usuario" ADD CONSTRAINT "fkshkwj12wg6vkm6iuwhvcfpct8" FOREIGN KEY ("rol_id") REFERENCES "public"."rol" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
