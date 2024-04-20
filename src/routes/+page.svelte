<script>
  import { showAddForm } from "../routes/stores.js";
  import Menu from "../components/Menu.svelte";
  import Search from "../components/Search.svelte";
  import AddTodoForm from "../components/AddTodoForm.svelte";
  import TodoList from "../components/TodoList.svelte";

</script>

<Menu/>

<div class="column is-10 has-text-dark">


<div class="container">
  <h1 class="title">Home</h1>

  <Search />
  
  {#if $showAddForm}
  <AddTodoForm />
  {/if}

  <TodoList/>
</div>

</div>



