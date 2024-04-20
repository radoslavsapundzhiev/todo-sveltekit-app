<script>
    export let todo;
</script>

<div class="box">
    <div class="columns">
        <div class="column is-9">
            {todo.name}
        </div>
        <div class="column is-3">
            <button class="button is-danger has-text-light">
                delete
            </button>
            <button class="button is-primary has-text-light">
                resolve
            </button>
        </div>
    </div>
</div>