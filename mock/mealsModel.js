const mongoose = require ('mongoose');

const MealsModelSchema = new mongoose.Schema ({
  operationStatus: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    default: 0,
  },
});

const Meals = mongoose.model ('meals', MealsModelSchema);

module.exports = Meals;
