import { MongoClient } from "mongodb";

// This method is going to conect the client to the database
export async function connect() {    
    try {
    const client = await MongoClient.connect('mongodb://localhost', {
        useUnifiedTopology: true});
    const db = client.db('great-pizza');
    return db;
    }
    // This cath is going to show an error message for the client
    catch(err){
        console.error(err);
    }
}


