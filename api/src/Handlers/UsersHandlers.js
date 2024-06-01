const getAllUsers = require("../controllers/Users/getAllUsers");
const getUsersByEmail = require("../controllers/Users/getUsersByEmail");
const getUsersById = require("../controllers/Users/getUsersById");
const getUsersByName = require("../controllers/Users/getUsersByName");
const postUsers = require("../controllers/Users/postUsers");
const updateUsersById = require("../controllers/Users/updateUsersByEmail");

// Obtener todos los niveles User
const getAllUsersHandler = async (req, res) => {
  try {
    const Users = await getAllUsers();
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Publicar un nivel User
const postUsersHandler = async (req, res) => {
  const data = req.body;
  try {
    const User = await postUsers(data);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Actualizar nivel User por correo electrónico
const updateUsersByIdHandler = async (req, res) => {
  const email = req.query.email;
  const updatedData = req.body;

  try {
    const employ = await updateUsersById(email, updatedData);
    res.status(200).json(employ);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener User por correo electrónico
const getUsersByEmailHandler = async (req, res) => {
  const { email } = req.query;

  try {
    const User = await getUsersByEmail(email);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener User por nombre
const getUsersByNameHandler = async (req, res) => {
  const { Name } = req.query;

  try {
    const User = await getUsersByName(Name);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener User por ID
const getUsersByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const User = await getUsersById(id);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllUsersHandler,
  postUsersHandler,
  updateUsersByIdHandler,
  getUsersByIdHandler,
  getUsersByNameHandler,
  getUsersByEmailHandler,
};
