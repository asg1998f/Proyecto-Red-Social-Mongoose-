const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js');

const authentication = async (req, res, next) => {
    try {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; 
      if (!token) {
        return res.status(400).send({ message: 'Token no proporcionado' });
      }
  
      const payload = jwt.verify(token, jwt_secret);
  
      if (!payload || !payload._id) {
        return res.status(401).send({ message: 'Token inválido o no autorizado' });
      }
  
      const user = await User.findOne({ _id: payload._id, tokens: token });
      if (!user) {
        return res.status(401).send({ message: 'Usuario no autorizado' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).send({ message: 'Token inválido' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).send({ message: 'Token expirado' });
      }
      return res.status(500).send({ message: 'Ha habido un problema con el token', error });
    }
  };
  

module.exports = { authentication };
