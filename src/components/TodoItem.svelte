<script>
    export let todo;
</script>

<div class="box">
    <div class="columns">
        <div class="column is-10">
            {todo.name}
        </div>
        <div class="column is-2">
            <button class="button is-danger">Delete</button>
        </div>
    </div>
</div>