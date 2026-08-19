/* 
uso de modulos built in
con el sistema modulo moderno
*/

import os from 'node:os'
import fsp from 'node:fs/promises'

//import { readFile } from 'node:fs/promises';
//console.log (os.totalmem() / 1024 / 1024 / 1024)

const contenido = await fsp.readFile('./texto.txt')
console.log(contenido)