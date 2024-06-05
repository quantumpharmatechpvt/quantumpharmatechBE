import { cartProducts } from "./modules/modules.js"
const Table ='cartProducts'


// Create or Update users
const createOrUpdateCart = async (data = {}) =>{
    try{
       await cartProducts.create(data,(error, request) => {
        if (error) {
            console.error(error);
        } else {
            console.log("DynamoTable create request object:", request);
        }
    }).exec()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all users
const readAllCartProducts = async()=>{
    try{
        const items= await cartProducts.scan().exec()
        return { success: true, data:items }

    } catch(error){
        console.log(error.message)
        return { success: false, data: null }
    }

}



// Delete User by ID
const deleteCartProductById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await cartProducts.delete(params).exec()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    readAllCartProducts,
    deleteCartProductById,
    createOrUpdateCart
}