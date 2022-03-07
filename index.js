"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
/*interface Todo {
    id: number;
    title: string;
    completed: boolean;
}*/
var Todo = /** @class */ (function () {
    function Todo() {
        var _this = this;
        this.toString = function () {
            return ("\tThe id is ".concat(_this.id, "\n\n        The title is ").concat(_this.title, "\n \n        completed? ").concat(_this.completed, "\n"));
        };
    }
    return Todo;
}());
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (response) {
    var todo = response.data;
    logTodo(todo);
});
//function variable
var logTodo = function (todo) {
    // const {id, title, completed} = todo;
    console.log(todo);
};
//typescript will do inference iff the declaration and
//assignment is done on one line, otherwise type annotations
//are not done
var throwError = function (message) {
    throw new Error(message);
};
