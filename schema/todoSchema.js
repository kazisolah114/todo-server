import mongoose from 'mongoose';
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"]
    }
})
export default todoSchema;