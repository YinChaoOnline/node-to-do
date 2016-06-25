var Todos = require("../model/todo.model");

module.exports = function (app) {
    var todos = [
        {
            "username": "yin",
            "todo": "play basketball",
            "done": false,
            "hasAttachment": false
        },
        {
            "username": "han",
            "todo": "watch tv",
            "done": false,
            "hasAttachment": false
        },
        {
            "username": "xiaoming",
            "todo": "play jojo",
            "done": false,
            "hasAttachment": false
        }
    ];

    app.get("/api/setupTodos", function (req, res) {
        Todos.create(todos, function (err, results) {
            if (err) {
                console.log("error occured,may be caused by" + err.message);
            } else {
                res.send(results);
            }
        });
    });
};