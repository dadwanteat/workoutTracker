const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeightSchema = new Schema({
    weightDay: {
        type: String,
        required: "Select day",
        unique: true,
    },

    name: {
        type: String,
        trim: true,
        required: "Exercise required."
    }, 
    
    type: {
        type: String,
        trim: true,
        required: "Excercise required."
    },

    sets: {
        type: Number,
        required: true,
    },

    reps: {
        type: Number,
        required: true,
    },

    weightDur: {
        type: Number,
    },
})

const Weight = mongoose.model("Weight", WeightSchema);

module.exports = Weight;