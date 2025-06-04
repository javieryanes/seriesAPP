import mongoose from "mongoose"

const generos =[ "accion" , "aventura" ,"drama", "suspense" , "deportivo" , "humor" , "biografía"]
/**
 * Modelo para usuarios en mongoose, contiene todos los atributos
 */
const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    nombreUsuario: { type: String, required: true, unique: true },
    generos: [{type: String, enum: generos}]
    
})

export const User = mongoose.model('User', userSchema)
//export User;