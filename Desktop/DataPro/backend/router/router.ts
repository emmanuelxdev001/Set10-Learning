import { Router } from "express";
import {
  createData,
  createMigrantData,
  createPopulationData,
  readEconomicData,
  readMigrantData,
  readPopulationData,
} from "../controller/economicController";
import { fileUpload } from "../utils/multer";
const router: Router = Router();

router.route("/create-economic").post(fileUpload, createData);
router.route("/create-population").post(fileUpload, createPopulationData);
router.route("/create-migrant").post(fileUpload, createMigrantData);

router.route("/read-economic").get(readEconomicData);
router.route("/read-population").get(readPopulationData);
router.route("/read-migrant").get(readMigrantData);

export default router;
