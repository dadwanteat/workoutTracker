const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  weight: [
    {
      type: Schema.Types.ObjectId,
      ref: "Weight",
    },
  ],

  cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio",
    },
  ],
});

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;
