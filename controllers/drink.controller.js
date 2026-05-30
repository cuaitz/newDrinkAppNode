import Drink from '../models/drink.model.js'

export const createDrink = async (req, res) => {
  try {
    const data = { ...req.body }
    const drink = await Drink.create(data)
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
    const drink = await Drink.findById(id)
    if (!drink) return res.status(404).json({ message: 'Drink not found' })
    Object.assign(drink, req.body)
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
    await Drink.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
