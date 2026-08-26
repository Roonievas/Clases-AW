//const respuesta = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
//console.log(respuesta)

// Declarar funcion obterUsuarios

//obtener via fetch () los usuarios desde la API REST

async function obtenerUsuarios(){
 const respuesta = await fetch ('https://api.escuelajs.co/api/v1/users')
 const usuarios = await respuesta.json() // usuarios va a ser un arreglo de objetos
}