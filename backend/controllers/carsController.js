import Cars from "../models/carModel.js";

export const getCars = async(req,res)=>{
    try {
        const response = await Cars.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}
