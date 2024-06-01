// Importar el modelo de datos del Rents (probablemente un esquema de Mongoose)
const Rents = require("../../models/Rents");

// Función asincrónica para actualizar la información de un Rents por su ID
const updateRentsById = async (id, updatedData) => {
  // Buscar el Rents en la base de datos por su ID y actualizarlo con los nuevos datos
  // El objeto "updatedData" contiene los campos y valores que se deben actualizar en el Rents
  // El parámetro { new: true } devuelve el Rents actualizado en lugar del Rents original
  const upddateRentById = await Rents.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  // Devolver el Rents actualizado que contiene la información actualizada
  return upddateRentById;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = updateRentsById;
