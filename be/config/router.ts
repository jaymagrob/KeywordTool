import * as express from "express";
import * as search from "../controllers/search";

const router = express.Router();

router.route("/search/:query/:country/").get(search.find);

export default router;
