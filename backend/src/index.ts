import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import propertyRoutes from "./routes/propertyRoutes";
import Database from "./config/mongo"
import userRouter from "./routes/usersRoutes";
import mailRouter from "./routes/mailRouter";
import path from "path";
import morgan from "morgan"

/* Config */

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001

app.use(morgan("combined"))

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

/* Routes */


app.use("/email", mailRouter);
app.use("/propertys", propertyRoutes);
app.use("/users", userRouter);

/* Images */

app.use(express.static(path.resolve(__dirname, "../public/uploads/propertys")));
app.use(express.static(path.resolve(__dirname, "../client")));

/* DataBase */

Database()
