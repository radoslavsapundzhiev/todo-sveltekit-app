<script>
    import {TodoStore} from "../routes/stores";
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
    
</script>

{#each $TodoStore as todo (todo.id)}
    <div class="box" in:scale out:fade="{{ duration: 500 }}">
        <TodoItem todo={todo}/>
    </div>
{/each}