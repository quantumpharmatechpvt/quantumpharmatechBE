import { orders } from "./modules/modules.js"
const Table ='orders'


// Create or Update users
const createOrUpdateOrders = async (data = {}) =>{
    try{
       await orders.create(data,(error, request) => {
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
const readAllOrders = async()=>{
    try{
        const items= await orders.scan().exec()
        return { success: true, data:items }

    } catch(error){
        console.log(error.message)
        return { success: false, data: null }
    }

}

// Read Users by ID
const getOrdersById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await orders.get(params).exec()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete User by ID
const deleteOrderById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await orders.delete(params).exec()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdateOrders,
    readAllOrders,
    getOrdersById,
    deleteOrderById
}