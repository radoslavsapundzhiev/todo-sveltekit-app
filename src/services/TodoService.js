const url = "http://localhost:5000";

const getTodos = async () => {
    const result = await fetch(`${url}/todos`);
    const data = await result.json();
    return data;
}

const createTodo = async (newTodo) => {
    const result = await fetch(`${url}/todos`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo)
    });

    return await result.json();
}

const deleteTodo = async (todoId) => {
    const result = await fetch(`${url}/todos/${todoId}`, {
        method: "DELETE",
    });
    return await result.json();
}

const resolveTodo = async (todo) => {
    const result = await fetch(`${url}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    })
    return await result.json();
}

const TodoService = {
    getTodos,
    createTodo,
    deleteTodo,
    resolveTodo
}

export default TodoService;