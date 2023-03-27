
import axios from 'axios';

const addToCart = async (payload: any) => {
    try{
        const apiResponse = await axios.put(
            'http://localhost:PORT/products/best*10.......', payload
        )
        // validacion de sesion
        // get del carrito id del comprador
        return apiResponse.data.data
    }catch(error){
        console.log('el error', (error as Error).message)
        return null
    }
    
}

export {
  addToCart
}