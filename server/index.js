import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/", router);

app.use((req, res) => {
	res.send("Hi I'm the Server");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("I'm listening");
});
