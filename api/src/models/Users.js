const mongoose = require("mongoose");

const ClasificacionesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
    required: [
      true,
      // "La evaluación del comportamiento de los vecinos es obligatoria",
    ],
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

const Clasificaciones = mongoose.model(
  "Clasificaciones",
  ClasificacionesSchema
);

module.exports = Clasificaciones;
