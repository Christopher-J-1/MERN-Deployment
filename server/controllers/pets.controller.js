const Pets = require("../models/pets.model");


module.exports.findAllPets = (req,res)=>{
    Pets.find()
        .then(allpets => {res.json({results: allpets})})
        .catch(err => {res.json({message: "something went wrong getting all the pets", error: err})})
}



module.exports.createPets = (req,res)=>{
    Pets.create(req.body)
        .then(newlyCreatedPets=>{res.json({results: newlyCreatedPets})})
        .catch(err => {res.json({message: "something went wrong creating a new pet", error: err})})
}

module.exports.findOnePets = (req, res)=>{
    Pets.findOne({_id:req.params.petId})
        .then(foundPets =>{res.json({results: foundPets})})
        .catch(err => {res.json({message: "something went wrong finding one pet", error: err})})
}


module.exports.updatePets = (req, res)=>{

    Pets.findOneAndUpdate(
        {_id: req.params.petId},
        req.body, 
        {new:true, runValidators:true}
        )
        .then(updatedPets => res.json({results: updatedPets}))
        .catch(err => {res.json({message: "something went wrong updating one pet", error: err})})
}


module.exports.deletePets = (req, res)=>{
    Pets.deleteOne({_id: req.params.petId})
        .then(deletedPets=> res.json({results: deletedPets}))
        .catch(err => {res.json({message: "something went wrong deleting one pet", error: err})})
}