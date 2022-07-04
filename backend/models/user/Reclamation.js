const mongoose = require("mongoose")

const ReclamationSchema = new mongoose.Schema(
   {
      Titre: { type: String, required: false },
      Texte: { type: Array, required: true },
   },
   { timestamps: true }
);

module.exports = mongoose.model("reclamation", ReclamationSchema);