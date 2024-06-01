// Importar el modelo de datos del Rents (probablemente un esquema de Mongoose)
const Rents = require("../../models/Rents");

// Función asincrónica para obtener un Rents por su ID
const getRentsById = async (id) => {
  // Buscar un Rents en la base de datos por su ID
  const rentsId = await Rents.findById(id);

  // Devolver el resultado de la consulta (el Rents encontrado o null si no se encontró)
  return rentsId;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = getRentsById;
