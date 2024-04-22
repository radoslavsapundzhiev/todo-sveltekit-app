<script>
    import {TodoStore, showNotification, messageStyle, messageText} from "../routes/stores";
    import { onMount } from "svelte";
    import TodoItem from "./TodoItem.svelte";
    import { fade, scale } from "svelte/transition";
    import TodoService from "../services/TodoService";

    onMount( async () => {
        try {
            const todos = await TodoService.getTodos();
            TodoStore.set(todos);
        } catch (error) {
            console.log(error);
        }
    });

    async function resolve(event) {
        let todo = event.detail.todo;
        let todoId = todo.id;
        const isDone = !todo.isDone;
        const updatedTodo = {...todo, isDone};
        try {
            const result = await TodoService.resolveTodo(updatedTodo);
            TodoStore.update((currentTodo) => {
                return currentTodo.map(todo => {
                    if (todo.id == todoId) {
                        return result;
                    }
                    return todo;
                });
            });
            showNotification.set(true);
            messageStyle.set("is-success");
            messageText.set(`Todo with name: ${result.name} and color: ${result.color} was resolved successfully!`);
        } catch(error) {
            console.log(error);
            showNotification.set(true);
            messageStyle.set("is-danger");
            messageText.set(error.message);
        }
    }
    
</script>

{#each $TodoStore as todo (todo.id)}
    <div class="box" in:scale out:fade="{{ duration: 500 }}">
        <TodoItem todo={todo} on:resolve={resolve}/>
    </div>
{/each}