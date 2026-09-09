import express from 'express'

const PUERTO = 3000
const app = express()
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`)
})
app.get('/', (req, res)=>{
    const usuarios = [
        {
            nombre: 'Rocio',
            email: 'roonievas@gmail.com'
        },
        {
            nombre: 'Rocio',
            email: 'roonievas@gmail.com'
            
        },
        ]
    res.json(usuarios)
})
app.post('/', (req, res)=>{
    const usuarios = [
        {
            nombre: 'Rocio',
            email: 'roonievas@gmail.com'
        },
        ]
    res.json(usuarios)
})

//Rutas con parámetros

app.get('/:id', (req, res)=>{
   const id = Number(req.params.id) //NaN
  const usuarios = [
        {
            nombre: 'Rocio',
            email: 'roonievas@gmail.com',
            id: 1
        },
        {
            nombre: 'asd',
            email: 'asds@gmail.com',
            id: 2
        },
        ]
        //1 Filtramos a partir del ID usuarios
        //Condicion: el id del parámetro debe ser igual al id del objeto
       const usuariosFiltrados = usuarios.filter(((usuario)=>{
            return usuario.id === id
        }))
     
   if (usuariosFiltrados.legth > 0){
    res.json(usuariosFiltrados)
   } else {
    res.status(404).json({mensaje: 'No existe usuario con ese id'})
   }
})

app.post('/', (req, res)=>{
    const usuarios = [
        {
            nombre: 'Rocio',
            email: 'roonievas@gmail.com'
        },
        ]
    res.json(usuarios)
})

