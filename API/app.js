const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const petRouter = require("./routes/petRouter");
const LoginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const RegisterRouter = require("./routes/registerRouter");
const DocRegisterRouter = require("./routes/doc-regRouter");
const docRouter = require("./routes/doctorRouter");
const productRouter = require("./routes/productRouter");
const bodyParser = require("body-parser");
const cartRouter = require("./routes/cartRouter");
require("dotenv").config();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader("Access-Control-Allow-HEADERS", "Content-type, Authorization");
//   next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to database"))
  .catch((error) => console.log("error" + error));

app.use("/api/pet-vet", petRouter);
app.use("/api/login", LoginRouter);
app.use("/api/register", RegisterRouter);
app.use("/api/doc-reg", DocRegisterRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", docRouter, productRouter);
app.use("/api/Cart", cartRouter);
// app.use("/api/admin",productRouter)

//hai welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


app.listen(process.env.PORT, () =>
  console.log("listening to port" + process.env.PORT)
);
