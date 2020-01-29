import { MongoClient } from "mongodb";

export async function connect() {
    try {
    const client = await MongoClient.connect('mongodb://localhost', {
        useUnifiedTopology: true});
    const db = client.db('great-pizza');
    return db;
    }catch(err){
        console.log(err);
    }
}


