<script lang="ts">
  import { onMount } from 'svelte';
  import { projectCount } from '../lib/projectsData';
  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<section id="home" class="hero" class:visible>
  <div class="hero-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
  
  <div class="hero-container">
    <div class="hero-content">
      <div class="badge">
        <span class="badge-icon">🎓</span>
        <span>HKBU Graduate</span>
      </div>
      
      <h1 class="hero-title">
        Hi, I'm <span class="name-highlight">Matthew Li</span>
      </h1>
      
      <p class="hero-subtitle">
        Full-Stack Developer crafting modern web experiences
      </p>
      
      <p class="hero-description">
        Fresh graduate from <strong>Hong Kong Baptist University</strong> specializing in 
        building scalable applications with <span class="tech-highlight">Vue.js</span>, 
        <span class="tech-highlight">Svelte</span>,
        <span class="tech-highlight">TypeScript</span>,
        <span class="tech-highlight">Node.js</span>, and 
        <span class="tech-highlight">Azure</span> cloud services.
      </p>
      
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-value">{projectCount}</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat">
          <div class="stat-value">8+</div>
          <div class="stat-label">Technologies</div>
        </div>
        <div class="stat">
          <div class="stat-value">2024</div>
          <div class="stat-label">Graduate</div>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">
          <span>Explore My Work</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#contact" class="btn btn-secondary">
          <span>Let's Connect</span>
        </a>
      </div>
    </div>
    
    <div class="hero-visual">
      <div class="code-window">
        <div class="window-header">
          <div class="window-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="window-title">portfolio.ts</div>
        </div>
        <div class="window-body">
          <pre><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {'{'}<br/>  <span class="code-property">name</span>: <span class="code-string">"Matthew Li"</span>,<br/>  <span class="code-property">education</span>: <span class="code-string">"HKBU"</span>,<br/>  <span class="code-property">role</span>: <span class="code-string">"Full-Stack Developer"</span>,<br/>  <span class="code-property">skills</span>: [<br/>    <span class="code-string">"Vue.js"</span>, <span class="code-string">"Node.js"</span>, <br/>    <span class="code-string">"TypeScript"</span>, <span class="code-string">"Azure"</span><br/>  ],<br/>  <span class="code-property">passion</span>: <span class="code-string">"Building solutions"</span> ✨<br/>{'}'};
</code></pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
    <span>Scroll to explore</span>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 5%;
    position: relative;
    overflow: hidden;
    background: #0f0f23;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    animation: float 20s infinite ease-in-out;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    top: -200px;
    left: -200px;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    bottom: -150px;
    right: -150px;
    animation-delay: -5s;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    top: 50%;
    right: 10%;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }

  .hero-container {
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    color: white;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .badge-icon {
    font-size: 1.2rem;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .name-highlight {
    background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2.5rem;
  }

  .tech-highlight {
    color: #667eea;
    font-weight: 600;
    background: rgba(102, 126, 234, 0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .stat {
    text-align: center;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.5rem;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  .hero-visual {
    position: relative;
  }

  .code-window {
    background: rgba(30, 30, 46, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  .window-header {
    background: rgba(20, 20, 30, 0.9);
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .window-dots {
    display: flex;
    gap: 0.5rem;
  }

  .window-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
  }

  .window-dots span:nth-child(1) { background: #ff5f56; }
  .window-dots span:nth-child(2) { background: #ffbd2e; }
  .window-dots span:nth-child(3) { background: #27c93f; }

  .window-title {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-family: 'Courier New', monospace;
  }

  .window-body {
    padding: 1.5rem;
    font-family: 'Courier New', monospace;
    font-size: 0.95rem;
    line-height: 1.8;
  }

  .code-keyword { color: #c792ea; }
  .code-variable { color: #82aaff; }
  .code-property { color: #c3e88d; }
  .code-string { color: #f78c6c; }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    z-index: 1;
  }

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    position: relative;
  }

  .wheel {
    width: 3px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 1.5s infinite;
  }

  @keyframes scroll {
    0% { top: 8px; opacity: 1; }
    100% { top: 24px; opacity: 0; }
  }

  @media (max-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hero-visual {
      order: -1;
    }

    .hero-title {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.2rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .hero-stats {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .stat-value {
      font-size: 2rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }

    .code-window {
      font-size: 0.85rem;
    }
  }
</style>
