import jwt from 'jsonwebtoken'

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ message: 'Authorization required' })
  const parts = header.split(' ')
  if (parts.length !== 2) return res.status(401).json({ message: 'Invalid authorization header' })
  const token = parts[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.id
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

export default requireAuth
