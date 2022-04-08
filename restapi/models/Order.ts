import mongoose from "mongoose";
//var User = mongoose.model('User');
var Product = mongoose.model('Product');

const orderSchema = new mongoose.Schema({
    code_order: {
        type: String,
        required: true,
        unique: true,
    },
    user_id: { 
        type: mongoose.Types.ObjectId,
        required: true,
        //ref: "User",
    },
    products: [{
        id_producto:{
            type: mongoose.Types.ObjectId,
            required: true,
            //ref: "Product",
        } ,
        quantity: {
            type: Number,
            default: 0,
        },
    }],
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    direccion: {
        type: String,
        required: true,
        lowercase: true,
    },
    date: {
        type: Date,
        default: () => Date.now(),
    },
    status: {
        type: String,
        enum:["PREPARÁNDOSE", "ENVIADO", "RECIBIDO"],
        default: "PREPARÁNDOSE",
    }
        
});

export default mongoose.model("Order", orderSchema)