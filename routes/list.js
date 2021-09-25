const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const listController = require("../controllers/listController");




//router.get("/",  catchErrors(listController.getAllList));
router.post("/",  catchErrors(listController.createList));
router.get("/:id",  catchErrors(listController.getList));
router.put("/:id", catchErrors(listController.updateList));
router.delete("/:id", catchErrors(listController.deleteList))
//---------------------------------------------------------------

router.get("/",  catchErrors(listController.getAllByFilter));
//this route is to get lists according to filters as well as without filters
//in query pass category/title to find or sort= new/old to find list

module.exports = router;
