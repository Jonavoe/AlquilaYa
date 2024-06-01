// Importar el modelo de datos del Rents (probablemente un esquema de Mongoose)
const Rents = require("../../models/Rents");

// Función asincrónica para crear un nuevo Rents en la base de datos
const postRents = async ({
  name,
  email,
  birthdate,
  photo,
  country,
  contactNumber,
  description,
  classifications,
  average_delay,
  incidences,
  hired_leads,
  rol,
  deleted,
}) => {
  // Crear un nuevo Rents en la base de datos utilizando los datos proporcionados
  const postRent = await Rents.create({
    name,
    email,
    birthdate,
    photo,
    country,
    contactNumber,
    description,
    classifications,
    average_delay,
    incidences,
    hired_leads,
    rol,
    deleted,
  });

  // Devolver el resultado de la creación del Rents (el Rents recién creado)
  return postRent;
};

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = postRents;
