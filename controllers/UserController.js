const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
/* const { jwt_secret } = require("../config/keys.js"); */

const UserController = {
  async register(req, res) {
    try {
      const { name, email, password, birthday } = req.body;

      if (!name || !email || !password || !birthday) {
        return res.status(400).send({ message: "Todos los campos son obligatorios" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: "El correo ya está registrado" });
      }

      const user = await User.create(req.body);
      res.status(201).send({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al registrar usuario", error });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send({ message: "Correo y contraseña son obligatorios" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign({ _id: user._id }, jwt_secret);

      if (user.tokens.length >= 5) user.tokens.shift(); 
      user.tokens.push(token);

      await user.save();

      res.send({ message: `Bienvenid@ ${user.name}`, token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al iniciar sesión", error });
    }
  },

  async logout(req, res) {
    try {
      const user = req.user;
      user.tokens = user.tokens.filter(token => token !== req.headers.authorization.split(' ')[1]);
      await user.save();

      res.send({ message: "Has cerrado sesión con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al cerrar sesión", error });
    }
  },

  async getProfile(req, res) {
    try {
      const user = req.user;
      res.send({ user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al obtener el perfil", error });
    }
  }
};

module.exports = UserController;
