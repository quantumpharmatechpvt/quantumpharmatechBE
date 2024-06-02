import { user } from "./modules/modules.js"
const Table ='users'


// Create or Update users
const createOrUpdate = async (data = {}) =>{
    try{
       await user.create(data,(error, request) => {
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
const readAllUsers = async()=>{
    try{
       const data = user.scan().exec((error, results) => {
            if (error) {
                console.error(error,'err');
            } else {
               return results
            }
        });
        return { success: true, data }

    } catch(error){
        console.log(error.message)
        return { success: false, data: null }
    }

}

// Read Users by ID
const getUserById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await user.get(params).exec()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete User by ID
const deleteUserById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await user.delete(params).exec()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}