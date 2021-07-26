const mongoose = require("mongoose");
const db_name = "pets_db";

mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established a connection!"))
    .catch((err)=>console.log("something went wrong", err))