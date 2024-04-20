<script>
  import Hero from "../components/Hero.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Hero/>

<div class="columns is-flex-direction-column is-fullheight-100vh">
  <main class="column">
    <div class="columns">
      <slot />
    </div>
  </main>

  <Footer/>
</div>

<style>
  .is-fullheight-100vh {
    height: 100vh;
  }
</style>
