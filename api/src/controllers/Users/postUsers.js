// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Definir una función asincrónica llamada postUsers que creará un nuevo registro de Users en la base de datos
const postUsers = async (data) => {
  console.log(data);
  // Crear un nuevo registro de Users en la base de datos utilizando el método "create" del modelo Users
  const postUser = await Users.create(data);

  // Retornar el nuevo registro creado
  return postUser;
};

// Exportar la función postUsers para que esté disponible en otros módulos
module.exports = postUsers;
