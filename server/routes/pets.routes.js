const PetsController = require("../controllers/pets.controller");

module.exports = app =>{
    app.get("/api/pets", PetsController.findAllPets)

    app.post("/api/pets/create", PetsController.createPets)

    app.get("/api/pets/:petId", PetsController.findOnePets)

    app.put("/api/pets/:petId", PetsController.updatePets)

    app.delete("/api/pets/:petId", PetsController.deletePets)


}