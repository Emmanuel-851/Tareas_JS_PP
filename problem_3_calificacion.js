//Problem 3
//crear un objeto con mis datos, calcular el promedio general de mis semestres y guardarlo en un objeto

let datos={
  nombre:"Emmanuel",
  apellido_p:"Hernandez",
  apellido_m:"Perez",
  telefono:7721565381,
  email:"ehdz851@gmail.com"
  }

calificacion=[8.2,8,8,9,8.4]

let suma_promedio = null
let e=null
let promedio=null
 
for(e = 0; e < calificacion.length; e++){
  suma_promedio += calificacion[e];
}
promedio = suma_promedio / calificacion.length;
console.log("")
console.log("Mi promedio de los 5 semestres es "+promedio)
console.log("")
console.log("----------------------------------------------------")
console.log("")
console.log("se muetra el objeto que se agrego")
console.log("")
datos.Promedio_final = promedio
console.log(datos)