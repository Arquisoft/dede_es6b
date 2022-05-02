import mongoose from "mongoose";
var Schema = mongoose.Schema;

const paymentSchema = new Schema({
    name: String,
    img: String
})

export default mongoose.model("Payment", paymentSchema) 