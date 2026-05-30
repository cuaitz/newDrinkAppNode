import express from 'express'
import requireAuth from '../middlewares/auth.js'
import {
  createDrink,
  listDrinks,
  listUserDrinks,
  updateDrink,
  deleteDrink
} from '../controllers/drink.controller.js'

const router = express.Router()

router.use(requireAuth)

router.post('/', createDrink)
router.get('/', listDrinks)
router.get('/user/:userId', listUserDrinks)
router.put('/:id', updateDrink)
router.delete('/:id', deleteDrink)

export default router
