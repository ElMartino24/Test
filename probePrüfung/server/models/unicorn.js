import  mongoose  from "mongoose";



const unicornSchema = mongoose.Schema({

    name: {
        type:String,
        required: true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }

})

const Unicorn = mongoose.model("Unicorn",unicornSchema)

export default Unicorn



