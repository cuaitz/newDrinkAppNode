import express from 'express'
import jwt from 'jsonwebtoken'
import {
  createDrink,
  listDrinks,
  listUserDrinks,
  updateDrink,
  deleteDrink
} from '../controllers/drink.controller.js'

const router = express.Router()

const optionalAuth = (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return next()
  const token = header.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.id
  } catch (err) {
    // ignore invalid token for optional auth
  }
  next()
}

const requireAuth = (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ message: 'Authorization required' })
  const token = header.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.id
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

router.post('/', optionalAuth, createDrink)
router.get('/', listDrinks)
router.get('/user/:userId', listUserDrinks)
router.put('/:id', requireAuth, updateDrink)
router.delete('/:id', requireAuth, deleteDrink)

export default router
