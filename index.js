import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// mongo
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
});

// rotas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// users
import userRoutes from './routes/user.routes.js';
app.use('/api/users', userRoutes);

// drinks
import drinkRoutes from './routes/drink.routes.js';
app.use('/api/drinks', drinkRoutes);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});