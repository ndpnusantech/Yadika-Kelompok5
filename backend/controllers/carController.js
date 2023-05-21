const Car = require('../models/carsModel')

exports.getCars = async(req,res)=>{
    try {
        const response = await Car.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}
exports.getCarsById = async(req,res)=>{
    try {
        const response = await Car.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(response)
    } catch (error) {
        console.log(error.message);
    }
}