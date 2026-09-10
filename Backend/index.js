const express = require("express");
const app = express();
const cors = require("cors")
const multer = require("multer")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path");

app.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);
dotenv.config();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.DB_URL)
.then(() => console.log("mongoDB connected"))
.catch((err) => console.log(err.message))

app.use("/api/book", require("./routes/books.routes"))

app.use("/api/admin" ,require("./routes/admin.routes"))

app.use("/api/users" , require("./routes/users.routes"))

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});