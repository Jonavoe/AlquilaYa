// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Definir una función asincrónica llamada getAllUserss que obtendrá todos los registros de Users
const getAllUsers = async () => {
  // Utilizar el método "find" del modelo Users para obtener todos los registros de la base de datos
  const allUsers = await Users.find();

  // Retornar los registros obtenidos
  return allUsers;
};

// Exportar la función getAllUserss para que esté disponible en otros módulos
module.exports = getAllUsers;
