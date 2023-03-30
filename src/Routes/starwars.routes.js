import { Router } from "express";
import { methods as starwarsController } from "./../controllers/starwars.controllers"

const router = Router();

router.get("/", starwarsController.getPeople);
router.get("/:name", starwarsController.getPerson);
router.post("/", starwarsController.addPerson)
router.put("/:id", starwarsController.updatePerson);
router.delete("/:id", starwarsController.deletePerson)


export default router;