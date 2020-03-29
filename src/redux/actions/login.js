
const type = 'login'

//Esta funcion retorna el tipo de accion y un mensaje, es la funncion
//a la que llama el dispatcher. 
const setUser = (user) =>{
    return {
        type,
        payload:user,
    }
}

export default setUser