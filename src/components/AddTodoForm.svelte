<script>
  import { TodoStore } from "../routes/stores.js";
  let name = '';
  let color = '';
  let isDone = false;

  const createTodo = async (newTodo) => {
    const url = "http://localhost:5000/todos";
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo)
    });

    return await result.json();
  }

  const handleSubmit = async () => {
    const newTodo = {
      name,
      color,
      isDone
    }

    const result = await createTodo(newTodo);

    TodoStore.update((currentTodo) => {
      return [result, ...currentTodo]
    });

    name = '';
    color = '';
    isDone = false;
  }

</script>

<form on:submit|preventDefault={handleSubmit} class="form block">
  <div class="field">
    <label for="name" class="label">Name</label>
    <div class="control">
      <input class="input" type="text" name="name" id="name" bind:value={name} required>
    </div>
  </div>
  <div class="field">
    <label for="color" class="label">Color</label>
    <div class="control">
      <input class="input" type="color" name="color" id="color" bind:value={color} required>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" bind:checked={isDone}>
        Is Done
      </label>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</form>
