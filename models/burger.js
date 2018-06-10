var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insert: function(col, vals, cb) {
    orm.insert("burgers", col, vals, function(res) {
      cb(res);
    });
	},
	update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
	},
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
};

// Export DB functions for controller
module.exports = burger;