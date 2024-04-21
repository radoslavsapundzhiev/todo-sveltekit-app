<script>
  import { TodoStore, showAddForm, showNotification, messageStyle, messageText } from "../routes/stores.js";
  import TodoService from "../services/TodoService.js";

  let name = '';
  let color = '#000000';
  let isDone = false;

  const handleSubmit = async () => {
    const newTodo = {
      name,
      color,
      isDone
    }

    try {
      if (name === "") {
        throw new Error("Name should not be empty!");
      }
      const result = await TodoService.createTodo(newTodo);

      TodoStore.update((currentTodo) => {
        return [result, ...currentTodo]
      });

      showNotification.set(true);
      messageStyle.set("is-success");
      messageText.set(`Todo with name: ${name} and color: ${color} was added successfully!`);
      showAddForm.set(false);

      name = '';
      color = '#000000';
      isDone = false;

    } catch (error) {
      console.log(error);
      showNotification.set(true);
      messageStyle.set("is-danger");
      messageText.set(error.message);
    }
  }

  function hideAddTodoForm() {
    showAddForm.set(false);
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
      <a class="button is-link is-light" on:click={hideAddTodoForm}>Cancel</a>
    </div>
  </div>
</form>

<style>
  form {
    width: 50%;
    margin: 0 auto;
  }
</style>
