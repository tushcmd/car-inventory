import mongoose, { Schema } from 'mongoose';

const carSchema = mongoose.Schema(
    {
        owner: {
            type: String,
            required: true,
        },
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        carYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
