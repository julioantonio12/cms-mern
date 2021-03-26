/*=============================================
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
=============================================*/
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let administradoresSchema = new Schema({

	user: {
		type: String,
		required: [true, "El usuario es obligatorio"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "La contraseña es obligatoria"]
	},
	email: {
		type: String,
		required: [true, "El email es obligatorio"]
	}
})


/*=============================================
Evitar devolver en la DATA el campo Password
=============================================*/

administradoresSchema.methods.toJSON = function(){

	let admin = this;
	let adminObject = admin.toObject();
	delete adminObject.password;

	return adminObject;

}

/*=============================================
EXPORTAMOS EL MODELO
=============================================*/

module.exports = mongoose.model("administrators", administradoresSchema);