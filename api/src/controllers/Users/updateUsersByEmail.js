// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Función asincrónica para actualizar la información de un Rents por su ID
const updateUsersById = async (id, updatedData) => {
  // Buscar el Rents en la base de datos por su ID y actualizarlo con los nuevos datos
  // El objeto "updatedData" contiene los campos y valores que se deben actualizar en el Rents
  // El parámetro { new: true } devuelve el Rents actualizado en lugar del Rents original
  const updateUserById = await Users.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  // Devolver el Rents actualizado que contiene la información actualizada
  return updateUserById;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = updateUsersById;
