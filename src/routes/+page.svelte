<script>
  import { showAddForm } from "../routes/stores.js";
  import Menu from "../components/Menu.svelte";
  import Filter from "../components/Filter.svelte";
  import AddTodoForm from "../components/AddTodoForm.svelte";
  import TodoList from "../components/TodoList.svelte";
  import Notification from "../components/Notification.svelte";
</script>

<Menu/>

<div class="column is-10 has-text-dark">

  <div class="container">
    <Notification/>
    {#if $showAddForm}
    <AddTodoForm />
    {/if}

    <Filter />

    <TodoList/>
  </div>

</div>



