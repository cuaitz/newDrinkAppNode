import Drink from '../models/drink.model.js'

export const createDrink = async (req, res) => {
  try {
    const { user_id, ...drinkData } = req.body
    const drink = await Drink.create({ ...drinkData, user_id: req.userId })
    res.status(201).json(drink)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const listDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find().sort({ createdAt: -1 })
    res.json(drinks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const listUserDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find({ user_id: req.userId }).sort({ createdAt: -1 })
    res.json(drinks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getDrink = async (req, res) => {
  try {
    const { id } = req.params
    const drink = await Drink.findById(id)
    if (!drink) return res.status(404).json({ message: 'Drink not found' })
    res.json(drink)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateDrink = async (req, res) => {
  try {
    const { id } = req.params
    const { user_id, ...drinkData } = req.body
    const drink = await Drink.findById(id)
    if (!drink) return res.status(404).json({ message: 'Drink not found' })
    if (!drink.user_id || drink.user_id.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this drink' })
    }
    Object.assign(drink, drinkData)
    await drink.save()
    res.json(drink)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params
    const drink = await Drink.findById(id)
    if (!drink) return res.status(404).json({ message: 'Drink not found' })
    if (!drink.user_id || drink.user_id.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this drink' })
    }
    await Drink.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
