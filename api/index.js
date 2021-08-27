const express = require("express");

const app = express();
const dotenv = require("dotenv");
const  mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer")
const path = require("path");


dotenv.config()
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


    mongoose
    .connect("mongodb+srv://priya:root@cluster0.sbi2t.mongodb.net/blog?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    }).then(console.log("connected to mongoDb "))
      .catch((err)=> console.log(err)); 
      const storage = multer.diskStorage({
          destination:(req, file, cb) =>{
              cb(null, "images")
          },filename:(req,file,cb)=>{
              cb(null, "hello.jpg");
          }
      })
      const upload = multer({ storage:storage});
      app.post("/api/upload", upload.single("file"), (req,res)=>{
          res.status(200).json("file has been uploaded")
      })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories",categoriesRoute);




 


app.listen("5000", ()=>{
    console.log("backend is running");
})

