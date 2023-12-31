const itemsRoute = require("express").Router();
const itemsController = require("../controllers/ItemsController");
itemsRoute.get("/post", itemsController.getItems);
itemsRoute.post("/post/create", itemsController.createItems);
itemsRoute.put("/update/:id", itemsController.updateItems);
itemsRoute.delete("/delete/:id", itemsController.deleteItems);
itemsRoute.get("/details/:id", itemsController.getDetailsItem);
module.exports = itemsRoute;
