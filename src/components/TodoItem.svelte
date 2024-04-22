<script>
    import { TodoStore, messageStyle, messageText, showNotification } from "../routes/stores.js";
    import TodoService from "../services/TodoService.js";
    import { createEventDispatcher } from "svelte";

    export let todo;

    const dispatch = createEventDispatcher();

    function handleResolve() {
        dispatch('resolve', {
            todo: todo
        });
    }

    let showDone = true;

    const handleDelete = async (todoId) => {
        if (confirm("Are you sure?")) {
            try {
                const result = await TodoService.deleteTodo(todoId);
                TodoStore.update((currentTodo) => {
                    return currentTodo.filter(todo => todo.id != result.id);
                });
                showNotification.set(true);
                messageStyle.set("is-success");
                messageText.set(`Todo with name: ${result.name} and color: ${result.color} was deleted successfully!`);
            } catch (error) {
                console.log(error);
                showNotification.set(true);
                messageStyle.set("is-danger");
                messageText.set(error.message);
            }
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