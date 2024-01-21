const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review: { type: String, required: true },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        default:10
    },
}, { timestamps: true });


const reviewModel = mongoose.model("review", reviewSchema)
module.exports = reviewModel




