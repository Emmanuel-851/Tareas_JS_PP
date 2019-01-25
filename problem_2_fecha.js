//Crear 3 variables, que son: dia, mes, año

let day=19
let month="Mayo"
let year=2001

let fecha=null
fecha=new Date(year+month+day);
let dia=null

switch(fecha.getDay()){

case 0:
dia="Domingo"
break

case 1:
dia="Lunes"
break

case 2:
dia="Martes"
break

case 3:
dia="Miercoles"
break

case 4:
dia="Jueves"
break

case 5:
dia="Viernes"
break

case 6:
dia="Sabado"
break
}
console.log("El dia que yo naci es "+dia)