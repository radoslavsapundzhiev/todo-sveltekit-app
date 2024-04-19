<section class="hero has-background-grey block">
  <div class="hero-body">
    <p class="title has-text-centered">Link hero</p>
    <p class="subtitle has-text-centered">Link subtitle</p>
  </div>
</section>

<main class="block">
  <div class="columns">
    <div class="column is-2 has-background-grey">
      <aside class="menu">
        <p class="menu-label has-text-light">Todo menu</p>
        <ul class="menu-list">
          <li class="is-hoverable">
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
          <li><a class="has-background-grey has-text-light">Add Todo</a></li>
        </ul>
      </aside>
    </div>

    <div class="column is-10 has-background-grey-light">
      <slot />
    </div>
  </div>
</main>

<footer class="footer has-background-grey has-text-light">
  <div class="content has-text-centered">
    <small> Copyright © 2024 Todo App. All Rights Reserved. </small>
  </div>
</footer>
