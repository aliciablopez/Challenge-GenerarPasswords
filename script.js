let cantidadInicial = document.getElementById("cantidad");
let contraseniaA, contraseniaB;
let generoAleatorio;
const CADENA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/* === Lista de verificación ===
- el botón responde correctamente a la llamada de la función?
- La funcion reconoce el contenido del input? Que hay en CantidadInicial realmente?
- el String funciona como array o hay que convertirlo a Array?
- Que cosas puede ingresar el usuario? Que pasa si ingresa algo erróneo?

hay que elegir un item aleatorio entre el indice 0-el último de la lista

- ¿Como saber la cantidad de items en un array?
- Como elegir un item diferente cada vez?
- Como se guarda la nueva cadena? Donde se guarda?
- Donde se muestran los resultados para el usuario?
- Como borrar el contenido del resultado?
- Podriamos poner un botón de copiado en el portapapeles? 
*/

const CadenaComoArray = CADENA.split("");


function generar(){
  if (cantidadInicial.value == "" || cantidadInicial.value < 7){
    alert("Lol nop");
  }else{
    let cant = cantidadInicial.value;
    mostrar(contraNueva(cant));
  }
}

function NumRandom(){
  aux = Math.floor(Math.random() * CadenaComoArray.length)
  return aux
}

function contraNueva(num){
  let pasword = "";
  for (let i = 0; i < num; i++) {
    pasword += CadenaComoArray[NumRandom()];
  }
  return pasword
}

function mostrar(text){
  //Cualquier texto ingresado por la función va a meterlo dentro del input:
  document.getElementById("mostrarPassword").value = text;
}

function limpiar(){
  document.getElementById("mostrarPassword").value = "";
}


/* == Codigo "Sucio" ==
function aleatorio(){
  generoAleatorio = Math.floor(Math.random() * cantidadInicial);
  console.log(generoAleatorio);
  return generoAleatorio;
 }


function validar(){
  if (cantidadInicial < 8){
    alert('La cantidad de caracteres no debe ser menor que 8');
  }else{
    contraseniaA= generar();
    return contraseniaA;
  }
}

function generar(){
  contraseniaB= CADENA.split(''); // Espacios para convertir cara letra a un elemento de un array
  for (i = 0; i < contraseniaB.length; i++) {
  }
}

function limpiar ()*/