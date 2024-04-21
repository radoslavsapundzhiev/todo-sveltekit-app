<script>
    import { TodoStore } from "../routes/stores";

    $: colors = [...new Set($TodoStore.map(todo => todo.color))];

    let resolved = false;
    let color = '#000000';

    const getTodos = async (url) => {
        const result = await fetch("http://localhost:5000/todos");
        const data = await result.json();
        return data;
    }

    async function handleReset() {
        const todos = await getTodos();
        TodoStore.set(todos);
        resolved = false;
        color = '#000000';
    }

    async function handleFilter() {
        let todos = await getTodos();
        todos = todos.filter(todo => todo.isDone == resolved);
        if (color !== '#000000') {
            todos = todos.filter(todo => todo.color === color);
        }
        TodoStore.set(todos);
    }

    async function handleToggleResolve() {
        let todos = await getTodos();
        todos = todos.filter(todo => todo.isDone == resolved);
        TodoStore.set(todos);
    }

    async function handleCahngeColor() {
        let todos = await getTodos();
        if (color !== '#000000') {
            todos = todos.filter(todo => todo.color === color);
        }
        TodoStore.set(todos);
    }

</script>

<div class="columns">
    <div class="column is-2 is-offset-5">
        <label class="checkbox" on:change={handleToggleResolve}>
            <input class="checkbox" type="checkbox" bind:checked={resolved}>
            Resolved
        </label>
    </div>
    <div class="column is-2">
        <div class="select">
            <select name="color" id="color" bind:value={color} on:change={handleCahngeColor}>
                <option value="#000000">Color...</option>
                {#each colors as color, i}
                    <option value="{color}">{color}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="column is-1">
        <input type="color" value={color} disabled>
    </div>
    <div class="column is-1">
        <button class="button is-info" on:click={handleReset}>
            Reset
        </button>
    </div>
    <div class="column is-1">
        <button class="button is-info" on:click={handleFilter}>
            Search
        </button>
    </div>
</div>

