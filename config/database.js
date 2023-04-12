const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    console.log("Database connected at 3000")
  )
  .catch((error) => console.log(error));