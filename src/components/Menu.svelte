<script>
    import { showAddForm, TodoStore, showNotification, messageStyle, messageText } from "../routes/stores.js";
    import TodoService from "../services/TodoService.js";

    function toggleAddForm() {
        showAddForm.update(n => !n);
    }

    const handleDeleteAll = async () => {
        if (confirm("Are you sure?")) {
            const allIds = $TodoStore.map(todo => todo.id);
            try {
                const allPromises = [];
                allIds.forEach(id => {
                    allPromises.push(TodoService.deleteTodo(id));
                });
                const result = await Promise.all(allPromises);
                TodoStore.set([]);
                showNotification.set(true);
                messageStyle.set("is-success");
                messageText.set(`All todos were deleted successfully!`);
            } catch (error) {
                console.log(error);
                showNotification.set(true);
                messageStyle.set("is-danger");
                messageText.set(error.message);
            }
        }
    }

    const handleResolveAll = async () => {
        try {
            const allPromises = [];
            $TodoStore.forEach(todo => {
                todo.isDone = true;
                allPromises.push(TodoService.resolveTodo(todo));
            });
            const result = await Promise.all(allPromises);
            TodoStore.set(result);
            showNotification.set(true);
            messageStyle.set("is-success");
            messageText.set(`All todos were resolved successfully!`);
        } catch (error) {
            console.log(error);
            showNotification.set(true);
            messageStyle.set("is-danger");
            messageText.set(error.message);
        }
    }

    const handleUnresolveAll = async () => {
        try {
            const allPromises = [];
            $TodoStore.forEach(todo => {
                todo.isDone = false;
                allPromises.push(TodoService.resolveTodo(todo));
            });
            const result = await Promise.all(allPromises);
            TodoStore.set(result);
            showNotification.set(true);
            messageStyle.set("is-success");
            messageText.set(`All todos were unresolved successfully!`);
        } catch (error) {
            console.log(error);
            showNotification.set(true);
            messageStyle.set("is-danger");
            messageText.set(error.message);
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