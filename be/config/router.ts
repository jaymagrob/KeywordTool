import * as express from "express";
import search from "../controllers/search";

const router = express.Router();

router.route("/search/:query/:country/:language/").get(search);

export default router;
