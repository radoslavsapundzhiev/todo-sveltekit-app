<script>
    import {TodoStore} from "../routes/stores";
    import { onMount } from "svelte";
    import TodoItem from "./TodoItem.svelte";

    onMount( async () => {
        $TodoStore = await getTodos();
    });

    const getTodos = async () => {
        const result = await fetch("http://localhost:5000/todos");
        const data = await result.json();
        return data;
    }
</script>

{#each $TodoStore as todo (todo.id)}
    <TodoItem todo={todo}/>
{/each}