<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleClickAddTodo() {
        dispatch('toggleAddForm');
    }
</script>

<div class="column is-2 has-background-grey">
    <aside class="menu">
        <p class="menu-label has-text-light has-text-centered">Todo menu</p>
        <ul class="menu-list">
        <li>
            <a class="has-background-grey has-text-light"
            >Mark all as resolved</a
            >
        </li>
        <li>
            <a class="has-background-grey has-text-light"
            >Mark all as unresolved</a
            >
        </li>
        <li>
            <a class="has-background-grey has-text-light">Remove all todos</a>
        </li>
        <li><a class="has-background-grey has-text-light" on:click={handleClickAddTodo}>Add Todo</a></li>
        </ul>
    </aside>
</div>

<style>
    ul.menu-list > li > a:hover {
        text-decoration: underline;
    }
</style>