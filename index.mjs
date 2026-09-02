import http from 'node:http'

console.log('Inicio')
//Instanciamos un servidor
const servidor = http.createServer((peticion, respuesta) => {
    //console.log(peticion)
    //console.log('entra peticion')
    //console.log(peticion.url, peticion.method)
    //respuesta.end('Funcionaaa')
    if (peticion.url === '/' && peticion.method == 'GET') {
        return respuesta.end('estamos en la raiz')
    }
    if (peticion.url === '/saludo'  && peticion.method == 'GET') {
        return respuesta.ed('hola que tal')
    }
     if (peticion.url === '/saludo'  && peticion.method == 'POST') {
        return respuesta.ed('hola rey')
    }


    else {
        respuesta.statusCode = 404
        respuesta.end('No encotnrado')
    }

})


//Abrios un puerto y lo ponemos a escuchar
servidor.listen(3000, () => {
    console.log('servidor arrancado')
})
