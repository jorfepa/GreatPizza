import { Router } from "express";
const router = Router();

// DB Connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

router.get('/getToppings/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('topping').find({}).toArray();
    res.json({ data: result });
});

router.post('/addTopping/', async (req, res) => {
    const db = await connect();
    const pizza = {
        name: req.body.Name
    }
    const result = db.collection('topping').insertOne(pizza);
    res.json((await result).ops[0]);
});

router.delete('/deleteTopping/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('topping').deleteOne({ _id: ObjectID(id) });
    res.json({
        message: `Topping ${id} Deleted`,
        result
    });
});

export default router;