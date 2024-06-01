// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Definir una función asincrónica llamada getUsersById que buscará un registro de Users por su ID
const getUsersById = async (id) => {
  // Utilizar el método "findById" del modelo Users para buscar un registro por su ID
  const usersById = await Users.findById(id);

  // Retornar el registro encontrado (puede ser un objeto o null si no se encuentra ningún registro con ese ID)
  return usersById;
};

// Exportar la función getUsersById para que esté disponible en otros módulos
module.exports = getUsersById;
