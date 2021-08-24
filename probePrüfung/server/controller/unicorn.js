import Unicorn from "../models/unicorn.js";


export const getUnicorns = async (req, res, next) => {

    try{

        const unicorns = await Unicorn.find({})

        res.json(unicorns)

    }catch(err){
       res.status(500).json("Server nix gut")
    }
}
