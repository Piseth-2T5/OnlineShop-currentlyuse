const { productRouter} = require("./route/products")
const { saleRouter} = require("./route/sales")
const { costumerRouter} = require("./route/costumers")
const { categoryRouter} = require("./route/categories")
const { userRouter } = require("./route/users")
const { authRouter } = require("./route/auth")
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/mnsysdb")
  .then(() => console.log("connect to mongodb..."))
  .catch((err) => console.log(err));

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/sales", saleRouter)
app.use("/api/costumers", costumerRouter)
app.use("/api/categories", categoryRouter)

app.listen(8090, () => {
  console.log("starting on port 8090...");
});
