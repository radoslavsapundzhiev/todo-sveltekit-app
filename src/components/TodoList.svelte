<script>
    import {TodoStore} from "../routes/stores";
    import { onMount } from "svelte";
    import TodoItem from "./TodoItem.svelte";
    import { fade, scale } from "svelte/transition";

    onMount( async () => {
        const todos = await getTodos();
        TodoStore.set(todos);
    });

    const getTodos = async () => {
        const result = await fetch("http://localhost:5000/todos");
        const data = await result.json();
        return data;
    }
</script>

{#each $TodoStore as todo (todo.id)}
    <div class="box" in:scale out:fade="{{ duration: 500 }}">
        <TodoItem todo={todo}/>
    </div>
{/each}