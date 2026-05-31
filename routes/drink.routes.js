import express from 'express'
import requireAuth from '../middlewares/auth.js'
import { upload } from '../middlewares/upload.js'
import {
  createDrink,
  listDrinks,
  listUserDrinks,
  getDrink,
  updateDrink,
  deleteDrink
} from '../controllers/drink.controller.js'

const router = express.Router()

router.use(requireAuth)

router.post('/', upload.single('image'), createDrink)
router.get('/', listDrinks)
router.get('/user', listUserDrinks)
router.get('/:id', getDrink)
router.put('/:id', upload.single('image'), updateDrink)
router.delete('/:id', deleteDrink)

export default router
