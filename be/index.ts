import * as express from "express";
import router from "./config/router";

const app = express();
const port = process.env.PORT || 3456;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.enable("trust proxy");

app.use("/api", router);

app.use(express.static("static"));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Port ${port} is up and running`));
