require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads')));

// routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

// error handler (last)
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
(async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado');
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
  } catch (err) {
    console.error('Erro ao conectar DB:', err);
  }
})();
