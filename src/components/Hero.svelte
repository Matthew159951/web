<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<section id="home" class="hero" class:visible>
  <div class="hero-content">
    <div class="text-content">
      <p class="greeting">Hi there! 👋</p>
      <h1>I'm <span class="highlight">Matthew Li</span></h1>
      <h2 class="subtitle">Computer Science Student</h2>
      <p class="description">
        Passionate about software development, algorithms, and building 
        innovative solutions. Currently pursuing my degree in Computer Science.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="code-window">
        <div class="window-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="code-content">
          <code>
            <span class="keyword">const</span> <span class="variable">student</span> = {'{'}<br/>
            &nbsp;&nbsp;<span class="property">name</span>: <span class="string">"Matthew"</span>,<br/>
            &nbsp;&nbsp;<span class="property">skills</span>: [<span class="string">"Python"</span>, <span class="string">"Java"</span>, <span class="string">"TypeScript"</span>],<br/>
            &nbsp;&nbsp;<span class="property">passion</span>: <span class="string">"Coding"</span>,<br/>
            &nbsp;&nbsp;<span class="property">status</span>: <span class="string">"Learning"</span><br/>
            {'}'};
          </code>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 5%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: float 6s ease-in-out infinite;
  }

  .hero-content {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .hero.visible .hero-content {
    opacity: 1;
    transform: translateY(0);
  }

  .text-content {
    color: white;
  }

  .greeting {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .highlight {
    color: #fbbf24;
    position: relative;
  }

  .subtitle {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: #e0e7ff;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #e0e7ff;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.875rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn-primary {
    background: white;
    color: #667eea;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background: white;
    color: #667eea;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .code-window {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 500px;
  }

  .window-header {
    background: #0f172a;
    padding: 0.75rem 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dot.red { background: #ef4444; }
  .dot.yellow { background: #fbbf24; }
  .dot.green { background: #10b981; }

  .code-content {
    padding: 2rem;
    font-family: 'Courier New', monospace;
    font-size: 0.95rem;
    line-height: 1.8;
    color: #e2e8f0;
  }

  .keyword { color: #c678dd; }
  .variable { color: #61afef; }
  .property { color: #e06c75; }
  .string { color: #98c379; }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
  }

  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }

    .cta-buttons {
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-visual {
      order: -1;
    }

    .code-window {
      max-width: 400px;
    }
  }
</style>
