var mongoose = require("mongoose");

var toDoSchemas = new mongoose.Schema({
    username: String,
    todo: String,
    done: Boolean,
    hasAttachment: Boolean
});

module.exports = mongoose.model("Todos", toDoSchemas);