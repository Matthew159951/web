<script lang="ts">
  let scrolled = false;

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header class:scrolled>
  <nav>
    <div class="logo">
      <span class="bracket">&lt;</span>CS Student<span class="bracket">/&gt;</span>
    </div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 5%;
    transition: all 0.3s ease;
    background: transparent;
  }

  header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2563eb;
  }

  .bracket {
    color: #dc2626;
    font-weight: 900;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #334155;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-links a:hover {
    color: #2563eb;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #2563eb;
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    header.scrolled {
      background: rgba(15, 15, 15, 0.95);
    }

    .nav-links a {
      color: #e8e8e8;
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      gap: 1rem;
      font-size: 0.9rem;
    }

    header {
      padding: 1rem 3%;
    }
  }
</style>
