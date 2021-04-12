const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TheMeanBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
console.log("Connected to DB");
}).catch(error => {
    console.log("Unable to connect to DB", error)
});
