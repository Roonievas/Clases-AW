const numeros = [1,2,3,4,5,6] // arreglo con 6 elementos
// métodos  
// map (busco identificador numeros + map (metodo))

//calllback funcion que se pasa como argumento de otra función (declaro una funcion 
// que se ejecuta dentro de otra funcion, la llamo)

//function recorrer(){
    //funcion convencional

//const recorrer = () => {
    //funcion flecha
//}
//numeros.map(recorrer) 

// const nuevoArrego = numeros.map ((numero)=>{
// console.log(numero)
// return numero + 2
// })
// console.log(nuevoArrego)

//trabajar con un objeto

const productos = [
    {
        nombre: 'pantalon',
        precio: 100
    },
     {
        nombre: 'remera',
        precio: 50
    }
]

// map devuelve un nuevo arreglo
const productosConInteres = productos.map((producto)=>{
    const productoCambiado = {
        nombre: producto.nombre,
        precio: producto.precio * 1.1
    }
return productoCambiado
})

console.log(productosConInteres)