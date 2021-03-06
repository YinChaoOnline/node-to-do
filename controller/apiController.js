var Todos = require("../model/todo.model");
var bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //api for find user's todos
    app.get("/api/todos/:username", function (req, res) {
        Todos.find({
            username: req.params.username
        }, function (err, todos) {
            if (err) {
                console.log("error occured,caused by " + err.message);
            } else {
                res.send(todos);
            }
        });
    });


    //api for find todo by id
    app.get("/api/todo/:id", function (req, res) {
        Todos.findById({
                "_id": req.params.id
            },
            function (err, todo) {
                if (err) {
                    console.log("error occured,caused by " + err.message);
                } else {
                    res.send(todo);
                }
            });
    });

    app.post("/api/todo", function (req, res) {

        if (req.body.id) {
            //update
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                done: req.body.done,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) {
                    console.log("error occured,caused by " + err.message);
                } else {
                    res.send("success");
                }
            });
        } else {
            var newTodo = new Todos({
                username: "test",
                todo: req.body.todo,
                done: req.body.done,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function (err, todo) {
                if (err) {
                    console.log("error occured,caused by " + err.message);
                } else {
                    res.send("success");
                }
            });
        }

    });

    app.delete("/api/todo", function (req, res) {
        Todos.findOneAndRemove({
            "_id": req.body.id
        }, function (err) {
            if (err) {
                console.log("error occured,caused by " + err.message);
            } else {
                res.send("success");
            }
        });
    });
};