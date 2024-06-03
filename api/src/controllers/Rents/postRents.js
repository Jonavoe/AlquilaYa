// Importar el modelo de datos del Rents (probablemente un esquema de Mongoose)
const Rents = require("../../models/Rents");

// Función asincrónica para crear un nuevo Rents en la base de datos
const postRents = async (data) => {
  // Crear un nuevo Rents en la base de datos utilizando los datos proporcionados
  const postRent = await Rents.create(data);

  // Devolver el resultado de la creación del Rents (el Rents recién creado)
  return postRent;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = postRents;
