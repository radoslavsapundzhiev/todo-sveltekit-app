<script>
    import { TodoStore } from "../routes/stores.js";
    export let todo;

    const deleteTodo = async (todoId) => {
        const url = `http://localhost:5000/todos/${todoId}`;
        const result = await fetch(url, {
            method: "DELETE",
        });
        return await result.json();
    }

    const handleDelete = async (todoId) => {
        try {
            const result = await deleteTodo(todoId);
            TodoStore.update((currentTodo) => {
                return currentTodo.filter(todo => todo.id != result.id);
            });
        } catch (error) {
            console.log(error);
        }
    }

</script>

<div class="columns">
    <div class="column is-9">
        {todo.name}
    </div>
    <div class="column is-3">
        <button class="button is-danger has-text-light" on:click={() => handleDelete(todo.id)}>
            delete
        </button>
        <button class="button is-primary has-text-light">
            resolve
        </button>
    </div>
</div>