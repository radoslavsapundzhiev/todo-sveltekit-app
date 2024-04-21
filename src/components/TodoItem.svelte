<script>
    import { TodoStore } from "../routes/stores.js";
    export let todo;

    let showDone = true;

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

    const resolveTodo = async (todo) => {
        const url = `http://localhost:5000/todos/${todo.id}`;
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
        return await result.json();
    }

    const handleResolve = async (todoId) => {
        const isDone = !todo.isDone;
        const updatedTodo = {...todo, isDone};
        try {
            const result = await resolveTodo(updatedTodo);
            TodoStore.update((currentTodo) => {
                return currentTodo.map(todo => {
                    if (todo.id == todoId) {
                        return result;
                    }
                    return todo;
                });
            });
            todo.isDone = result.isDone;
        } catch(error) {
            console.log(error);
        }
    }

    function handleShowDone() {
        showDone = !showDone;
    }

</script>

<div class="columns">
    <div class="column is-9">
        <strong>Title: </strong><span>{todo.name}</span> |
        <strong>Color: </strong><input type="color" bind:value={todo.color}> |
        <strong>Color text: </strong><span>{todo.color}</span>
    </div>
    <div class="column is-3">
        {#if !todo.isDone}
        <button class="button is-warning has-text-light" on:click={handleResolve}>
            resolve
        </button>
        {:else}
        {#if showDone}
        <button class="button is-success has-text-light" on:click={handleShowDone}>
            DONE
        </button>
        {/if}
        {/if}
        <button class="button is-danger has-text-light" on:click={() => handleDelete(todo.id)}>
            delete
        </button>
    </div>
</div>