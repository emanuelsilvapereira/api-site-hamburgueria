const { verify } = require('../utils/token');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não enviado' });
  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
