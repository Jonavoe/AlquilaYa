const mongoose = require("mongoose");
const validator = require("validator");

const RentsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  provincia: {
    type: String,
    // required: [true, "La provincia es obligatoria"],
  },
  ciudad: {
    type: String,
    // required: [true, "La ciudad es obligatoria"],
  },
  direccion: {
    type: String,
    // required: [true, "La dirección es obligatoria"],
  },
  tipoVivienda: {
    type: String,
    // required: [true, "El tipo de vivienda es obligatorio"],
    // enum: ["departamento", "casa", "duplex"],
  },
  precio: {
    type: Number,
    // required: [true, "El precio es obligatorio"],
    min: [0, "El precio no puede ser negativo"],
  },
  estadoInmueble: {
    type: String,
    // required: [true, "El estado del inmueble es obligatorio"],
    // enum: ["disponible", "alquilado", "vendido", "en mantenimiento"], // Ajusta las opciones según tus necesidades
  },
  descripcion: {
    type: String,
    // required: [true, "La descripción es obligatoria"],
  },
  // fotos: {
  //   type: [String],
  //   validate: {
  //     validator: (v) => v.every(validator.isURL),
  //     message: 'Las fotos deben ser URLs válidas',
  //   },
  // },
  clasificaciones: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Clasificaciones" },
  ],
  opiniones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Opiniones" }],
  mensajes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mensajes" }],
  idUsuarioPropietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    // required: [true, "El ID del usuario propietario es obligatorio"],
  },
});

const Rents = mongoose.model("Inmuebles", RentsSchema);

module.exports = Rents;
