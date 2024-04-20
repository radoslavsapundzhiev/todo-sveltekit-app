<script>
    import { showAddForm, TodoStore } from "../routes/stores.js";

    function toggleAddForm() {
        showAddForm.update(n => !n);
    }

    const deleteTodo = async (todoId) => {
        const url = `http://localhost:5000/todos/${todoId}`;
        const result = await fetch(url, {
            method: "DELETE",
        });
        return await result.json();
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

    const handleDeleteAll = async () => {
        const allIds = $TodoStore.map(todo => todo.id);
        try {
            const allPromises = [];
            allIds.forEach(id => {
                allPromises.push(deleteTodo(id));
            });
            const result = await Promise.all(allPromises);
            TodoStore.set([]);
        } catch (error) {
            console.log(error);
        }
    }

    const handleResolveAll = async () => {
        try {
            const allPromises = [];
            $TodoStore.forEach(todo => {
                todo.isDone = true;
                allPromises.push(resolveTodo(todo));
            });
            const result = await Promise.all(allPromises);
            TodoStore.set(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUnresolveAll = async () => {
        try {
            const allPromises = [];
            $TodoStore.forEach(todo => {
                todo.isDone = false;
                allPromises.push(resolveTodo(todo));
            });
            const result = await Promise.all(allPromises);
            TodoStore.set(result);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<div class="column is-2 has-background-grey">
    <aside class="menu">
        <p class="menu-label has-text-light has-text-centered">Todo menu</p>
        <ul class="menu-list">
        <li>
            <a class="has-background-grey has-text-light" on:click={handleResolveAll}
            >Mark all as resolved</a
            >
        </li>
        <li>
            <a class="has-background-grey has-text-light" on:click={handleUnresolveAll}
            >Mark all as unresolved</a
            >
        </li>
        <li>
            <a class="has-background-grey has-text-light" on:click={handleDeleteAll}>Remove all todos</a>
        </li>
        <li><a class="has-background-grey has-text-light" on:click={toggleAddForm}>Add Todo</a></li>
        </ul>
    </aside>
</div>

<style>
    ul.menu-list > li > a:hover {
        text-decoration: underline;
    }
</style>