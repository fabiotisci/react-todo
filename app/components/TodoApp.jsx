const React = require('react');
const TodoList = require('TodoList');
const TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                { id: 1, text: 'Walk the dog'},
                { id: 2, text: 'Clean the garden'},
                { id: 3, text: 'Learn React'},
                { id: 4, text: 'Improve ES6'}
            ]
        }
    },
    render: function() {
        const { todos } = this.state;
        return (
            <TodoList todos={todos}/>
        )
    }
});

module.exports = TodoApp;