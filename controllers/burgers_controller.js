var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var burgerList = {burgers: data};

		console.log(burgerList);

		res.render("index", burgerList);
	});
});

router.post("/burgers", function(req, res){
	burger.insert(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/')
	});
});

router.put("/burgers/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition ", condition);
    console.log("REQUEST: " + req);
	burger.update({
        devoured: req.body.devoured
    }, condition, function(data) {
        if (result.changedRows == 0) {
            // If no rows were changed, then ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
	});
});

router.delete("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js
module.exports = router;