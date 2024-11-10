import express from 'express';
import mongoose from 'mongoose';
import todoSchema from '../schema/todoSchema.js';
const Todo = new mongoose.model("MyTodo", todoSchema)
const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().select({
            __v: 0
        });
        res.status(200).json(todos)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.find({_id: req.params.id}).select({
            __v: 0
        });
        res.status(200).json(todo)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})
router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).json({"message": "Todo was added successfully!"})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})
export default router;