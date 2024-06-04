const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  idInmueble: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Inmuebles",
    // required: [true, "El ID del inmueble es obligatorio"],
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    // required: [true, "El ID del usuario es obligatorio"],
  },
  email: {
    type: String,
    // required: [true, "La evaluación del estado del inmueble es obligatoria"],
  },
  password: {
    type: String,
    // required: [true, "La evaluación del estado del inmueble es obligatoria"],
  },
  estadoInmueble: {
    type: String,
    // required: [true, "La evaluación del estado del inmueble es obligatoria"],
  },
  relacionPropietario: {
    type: String,
    // required: [
    //   true,
    // "La evaluación de la relación con el propietario es obligatoria",
    // ],
  },
  vecinos: {
    type: String,
    // required: [
    //   true,
    // "La evaluación del comportamiento de los vecinos es obligatoria",
    // ],
  },
  zona: {
    type: String,
    // required: [true, "La evaluación de la zona es obligatoria"],
  },
  precio: {
    type: String,
    // required: [true, "La evaluación del precio del alquiler es obligatoria"],
  },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
