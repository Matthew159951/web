<script lang="ts">
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main>
  <Header />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</main>

<style>
  main {
    width: 100%;
    overflow-x: hidden;
  }
</style>
