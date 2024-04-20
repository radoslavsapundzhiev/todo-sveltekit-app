<script>
    import TodoItem from "./TodoItem.svelte";
    export let todos = [
        {
            id: 1,
            name: "First todo",
            color: '',
            isDone: false
        },
        {
            id: 2,
            name: "Second todo",
            color: '',
            isDone: false
        },
        {
            id: 3,
            name: "Third todo",
            color: '',
            isDone: false
        },
        {
            id: 4,
            name: "Fourth todo",
            color: '',
            isDone: false
        },
        {
            id: 5,
            name: "Fifth todo",
            color: '',
            isDone: false
        }
    ]
</script>

{#each todos as todo (todo.id)}
    <TodoItem todo={todo}/>
{/each}