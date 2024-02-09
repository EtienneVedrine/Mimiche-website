<script>
  import Home from "./lib/Home.svelte"
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>


<main>
  <h1 class="py-8 px-4 border border-indigo-900 shadow-lg">Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<TailwindCss/>
<Home />