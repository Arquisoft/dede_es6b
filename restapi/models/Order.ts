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
        type: String,
        required: true,
        //ref: "User",
    },
    products: [],
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    url: {
        type: String,
        required: true,
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
        
})

export default mongoose.model("Order", orderSchema)