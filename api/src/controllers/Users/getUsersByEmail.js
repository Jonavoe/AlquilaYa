// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Definir una función asincrónica llamada getUsersByEmail que buscará un registro de Users por correo electrónico
const getUsersByEmail = async (email) => {
  // Utilizar el método "findOne" del modelo Users para encontrar un registro con el correo electrónico proporcionado
  const usersByEmail = await Users.findOne({ email: email });

  // Retornar el registro encontrado (puede ser un objeto o null si no se encuentra ningún registro)
  return usersByEmail;
};

// Exportar la función getUsersByEmail para que esté disponible en otros módulos
module.exports = getUsersByEmail;
