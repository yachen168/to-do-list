export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.renderTodos();
        this.view.bindNewConfirmButton(this.addNewTodo.bind(this));
    }
    renderTodos() {
        this.view.renderTodos(this.model.todos);
        // 重新綁定
        this.todoCount();
        this.editDone();
        this.editCancel();
        this.deleteTodo();
    }
    addNewTodo() {
        this.model.addNewTodo(this.view.addNewTodo());
        this.view.clearNewTodo();
        this.todoCount();
        this.renderTodos();
        console.log(this.model.todos);
    }
    editCancel() {
        this.view.bindCancelEditButton(this.renderTodos.bind(this));
    }
    editDone() {
        this.view.bindConfirmEditButton(function(e, index) {
            // console.log(e.target);
            console.log(index);
            this.model.editDone(this.view.editDone(index), index);
            console.log(this.model.todos);
        }.bind(this));
    }
    deleteTodo() {
        this.view.bindDeleteButton(function(e, index) {
            this.model.deleteTodo(index);
            this.renderTodos();
        }.bind(this));
    }
    todoCount() {
        this.view.todoCount(this.model.todoCount());
    }

    toggleCompeted() {}
    findTodo() {
        this.view.findTodo(this.model.todos);
    }
}