const url = 'http://localhost:3000/menu'

export const nuevoproducto = async producto =>{
    //Agregar nuevo producto al db.json
    try{
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(producto),
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }catch(error) {
        console.log(error)
    }
    
}

export const obtenerproductos = async ()=>{
    //Me retorna lista de productos que se encuentran en el endpoint del menu localhost:3000/menu
    try{
        const resultado = await fetch(url)
        const productos = await resultado.json()
        return productos
    } catch (error){
        console.log(error)
    }
}

export const obtenerproducto = async id=>{
    //consulta de 1 producto, me retorna 1 solo producto dado un id
    try{
        const resultado = await fetch(`${url}/${id}`)
        const producto = await resultado.json()
        return producto
    }catch (error){
        console.log(error)
    }

}

 export const editarproducto = async producto =>{
    try{
        await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers:{
                'Content-Type':'Aplication/json'
            }
            })
    }catch (error){
        console.log(error)
    }
}

 export const eliminarproducto = async id=>{
    try{
        await fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
    } catch (error){
        console.log(error)
    }
}