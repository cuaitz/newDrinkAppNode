import mongoose from 'mongoose'

const drinkSchema = new mongoose.Schema({
  user_id: { type: String, default: null },
  strDrink: { type: String, default: null },
  strCategory: { type: String, default: null },
  strInstructions: { type: String, default: null },
  strDrinkThumb: { type: String, default: null },
  strIngredient1: { type: String, default: null },
  strIngredient2: { type: String, default: null },
  strIngredient3: { type: String, default: null },
  strIngredient4: { type: String, default: null },
  strIngredient5: { type: String, default: null },
  strIngredient6: { type: String, default: null },
  strIngredient7: { type: String, default: null },
  strIngredient8: { type: String, default: null },
  strIngredient9: { type: String, default: null },
  strIngredient10: { type: String, default: null },
  strIngredient11: { type: String, default: null },
  strIngredient12: { type: String, default: null },
  strIngredient13: { type: String, default: null },
  strIngredient14: { type: String, default: null },
  strIngredient15: { type: String, default: null },
  strMeasure1: { type: String, default: null },
  strMeasure2: { type: String, default: null },
  strMeasure3: { type: String, default: null },
  strMeasure4: { type: String, default: null },
  strMeasure5: { type: String, default: null },
  strMeasure6: { type: String, default: null },
  strMeasure7: { type: String, default: null },
  strMeasure8: { type: String, default: null },
  strMeasure9: { type: String, default: null },
  strMeasure10: { type: String, default: null },
  strMeasure11: { type: String, default: null },
  strMeasure12: { type: String, default: null },
  strMeasure13: { type: String, default: null },
  strMeasure14: { type: String, default: null },
  strMeasure15: { type: String, default: null }
}, { timestamps: true });

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;
