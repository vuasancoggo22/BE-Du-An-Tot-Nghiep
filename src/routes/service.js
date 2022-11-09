import { Router } from "express";
import {
  createService,
  list,
  read,
  remove,
  unactiveService,
  update,
  readslug,
  groupAgeByService,
} from "../controllers/service";

const router = Router();
router.get("/service", list);
router.post("/service", createService);
router.patch("/service/:id", update);
router.delete("/service/:id", remove);
router.get("/service-slug/:slug", readslug);
router.get("/service/:id", read);
router.get('/age-by-service',groupAgeByService)
export default router;
