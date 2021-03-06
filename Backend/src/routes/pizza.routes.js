import { Router } from "express";
const router = Router();

// DB Connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

router.get('/getPizzas', async (req, res) => {
    const db = await connect();
    const result = await db.collection('pizza').find({}).toArray();
    res.json({ data: result });
});

router.get('/getPizza/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('pizza').findOne({ _id: ObjectID(id) });
    res.json({ data: result });
});

router.delete('/deletePizza/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('pizza').remove({ _id: ObjectID(id) });
    res.json({
        message: `Pizza ${id} Deleted`,
        result
    });
});

router.post('/addPizza/', async (req, res) => {
    const db = await connect();
    const pizza = {
        name: req.body.Name,
        description: req.body.Description,
        topping: []
    }
    const result = db.collection('pizza').insertOne(pizza);
    res.json({ data: (await result).ops[0] });
});

router.put('/addToppingToPizza/:id', async (req, res) => {
    const db = await connect();
    const { id } = req.params;
    const idTopping = req.body.idTopping;

    const result = await db.collection('pizza').updateOne(
        { _id: ObjectID(id) }, { $addToSet: { topping: idTopping } }
    )

    res.json({
        message: `Pizza ${id} Updated`,
        result
    });
});

router.put('/deleteToppingFromPizza/:id', async (req, res) => {
    const db = await connect();
    const { id } = req.params;
    const idTopping = req.body._id;

    const result = await db.collection('pizza').updateOne(
        { _id: ObjectID(id) }, { $pull: { topping: idTopping } }
    )

    res.json({
        message: `Pizza ${id} Updated`,
        result
    });
});

router.get('/getToppingsForPizza/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const toppings = await db.collection('pizza').findOne({ _id: ObjectID(id) });
    const ids = toppings.topping.map(ObjectID);
    const result = await db.collection('topping').find({ "_id": { "$in": ids } }).toArray();
    res.json({ data: result });
});

router.get('/getAvailableToppingsForPizza/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const toppings = await db.collection('pizza').findOne({ _id: ObjectID(id) });
    const ids = toppings.topping.map(ObjectID);
    const result = await db.collection('topping').find({ "_id": { "$nin": ids } }).toArray();
    res.json({ data: result });
});
export default router;