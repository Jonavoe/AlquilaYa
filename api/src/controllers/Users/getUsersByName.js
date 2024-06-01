// Importar el modelo Users desde la ubicación correcta
const Users = require("../../models/Users");

// Definir una función asincrónica llamada getUsersByName que buscará registros de Users por nombre
const getUsersByName = async (Name) => {
  // Crear una expresión regular (regex) para realizar una búsqueda insensible a mayúsculas y minúsculas del nombre proporcionado
  const regex = new RegExp(Name, "i");

  // Utilizar el método "find" del modelo Users para buscar registros que coincidan con el nombre proporcionado mediante la expresión regular
  const usersByName = await Users.find({ Name: { $regex: regex } });

  // Retornar los registros encontrados (puede ser un array vacío si no se encuentran coincidencias)
  return usersByName;
};

// Exportar la función getUsersByName para que esté disponible en otros módulos
module.exports = getUsersByName;
