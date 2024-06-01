// Importar el modelo de datos del Rents (probablemente un esquema de Mongoose)
const Rents = require("../../models/Rents");

// Función asincrónica para obtener todos los Rents
const getAllRents = async () => {
  // Consultar todos los Rents en la base de datos usando el modelo Rents
  const allRents = await Rents.find();

  // Devolver el resultado de la consulta (todos los Rents)
  return allRents;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = getAllRents;
