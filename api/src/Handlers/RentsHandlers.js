const getAllRents = require("../controllers/Rents/getAllRents");
const getRentsByEmail = require("../controllers/Rents/getRentsByEmail");
const getRentsById = require("../controllers/Rents/getRentsById");
const postRents = require("../controllers/Rents/postRents");
const updateRentsById = require("../controllers/Rents/updateRentsById");

// Obtener todos los Rents
const getAllRentsHandler = async (req, res) => {
  try {
    const Rents = await getAllRents();
    res.status(200).json(Rents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Registrar nuevo Rents
const postRentsHandler = async (req, res) => {
  const data = req.body;

  try {
    const Rents = await postRents(data);
    res.status(200).json(Rents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


// Actualizar información del Rents
const updateRentsHandler = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const Rents = await updateRentsById(id, updatedData);
    res.status(200).json(Rents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener Rents por correo electrónico
const getRentsByEmailHandler = async (req, res) => {
  const { email } = req.query;

  try {
    const leads = await getRentsByEmail(email);
    res.status(200).json(leads);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener Rents por ID
const getRentsByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const Rents = await getRentsById(id);
    res.status(200).json(Rents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllRentsHandler,
  postRentsHandler,
  updateRentsHandler,
  getRentsByIdHandler,
  getRentsByEmailHandler,
};
