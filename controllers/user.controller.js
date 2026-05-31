import 'dotenv/config'
import User from '../models/user.model.js'
import { generateToken, comparePassword } from '../shared/user.utils.js'

export const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = generateToken(user)
        res.status(201).json({ token: token, id: user._id })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !comparePassword(password, user.password))
        return res.status(401).json({ message: "invalid credentials" })
    const token = generateToken(user)
    res.json({ token: token, id: user._id })
}

export const me = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user) return res.status(404).json({ message: 'User not found' })
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
