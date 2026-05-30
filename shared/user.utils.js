import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const generateToken = (user) => {
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '12h' }
    );

    return token;
}

export const comparePassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};
