import mongoose from "mongoose";
var Schema = mongoose.Schema;

const productSchema = new Schema({
    _id:String,
    name: String,
    code: String,
    size:String,
    stock:{type:Number, default: 0},
    category:{type: String, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
    color:String,
    price:{type:Number, default: 0},
    imagen: String
})

export default mongoose.model("Product", productSchema) 