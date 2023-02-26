--Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)
SELECT nombres 
FROM empleados 
ORDER BY nombres DESC;

--Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
SELECT empleados.nombres, puestos.puesto, localidades.localidad
FROM empleados 
JOIN puestos ON empleados.puesto_id = puestos.id 
JOIN depertamentos ON empleados.departamento_id = departamentos.id 
JOIN localidades ON departamentos.localidad_id = localidades.id
WHERE puestos.puesto = 'Soporte'

--Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
SELECT nombres
FROM empleados
WHERE nombres LIKE '%o'

--Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
SELECT empleados.nombres, puestos.puesto, empleados.sueldo
FROM empleados
JOIN puestos ON empleados.puesto_id = puestos.id 
JOIN departamentos ON empleados.departamento_id = departamentos.id
JOIN localidades ON departamentos.localidades_id = localidades.id
WHERE localidades.localidad = 'Carlos Paz'

--Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.
SELECT empleados.nombres, empleados.sueldo, localidades.localidad
FROM empleados
JOIN departamentos ON empleados.departamento_id = departamentos.id
JOIN localidades ON departamentos.localidades_id = localidades.id
WHERE empleados.sueldos BETWEEN 10000 AND 13000

--Visualizar los departamentos con más de 5 empleados
SELECT departamentos.denominacion
FROM departamentos
WHERE (
    SELECT count(1) 
    FROM empleados 
    WHERE departamento_id = departamentos.id) > 5

--Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.
SELECT empleados.nombres
FROM empleados
JOIN puestos ON empleados.puesto_id = puestos.id AND puestos.puesto IN ('Analista', 'Programador')
JOIN departamentos ON empleados.departamento_id = departamentos.id
JOIN localidades ON departamentos.localidades_id = localidades.id AND localidades.localidad = 'Córdoba'

--Calcula el sueldo medio de todos los empleados.
SELECT AVG(empleados.sueldo) AS sueldo_promedio
FROM empleados

--¿Cuál es el máximo sueldo de los empleados del departamento 10?
SELECT MAX(empleados.sueldo) AS sueldo_maximo 
FROM empleados
JOIN departamentos ON empleados.departamento_id = departamentos.id 
WHERE departamentos.id = 10

-- Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
SELECT MIN(empleados.sueldos) AS sueldo_minimos
FROM empleados
JOIN departamentos ON empleados.departamento_id = departamentos.id
WHERE departamentos.denominacion = 'Soporte'

-- Para cada puesto obtener la suma de sueldos.
SELECT SUM(empleados.sueldos) AS sueldos_totales
FROM empleados
JOIN puestos ON empleados.puesto_id = puestos.id
GROUP BY puestos.puesto