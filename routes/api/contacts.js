const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares/index");

const {schemas} = require("../../models/Contact");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteScheme), ctrl.updateFavorite);

module.exports = router;
