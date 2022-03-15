import mongoose from 'mongoose';

const uri = "mongodb+srv://asw:dede@cluster0.elc5r.mongodb.net/dede?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(() =>{
    console.log("Database succesfully connected")
})
.catch((err)=>{
    console.error(err);
});