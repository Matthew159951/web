<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-logo">
          <span class="bracket">&lt;</span>CS Student<span class="bracket">/&gt;</span>
        </h3>
        <p>Building the future, one line of code at a time.</p>
      </div>

      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Connect</h4>
        <ul class="footer-links">
          <li><a href="https://github.com/matthew159951" target="_blank">GitHub</a></li>
          <li><a href="mailto:23214759@life.hkbu.edu.hk">Email</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {currentYear} Matthew Portfolio. Built with Svelte & TypeScript.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #1e293b;
    color: #e2e8f0;
    padding: 3rem 5% 2rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .footer-section h3,
  .footer-section h4 {
    margin-bottom: 1rem;
  }

  .footer-logo {
    font-size: 1.5rem;
    color: #667eea;
    font-weight: 700;
  }

  .bracket {
    color: #dc2626;
    font-weight: 900;
  }

  .footer-section p {
    color: #cbd5e1;
    line-height: 1.6;
  }

  .footer-section h4 {
    color: #e2e8f0;
    font-size: 1.1rem;
  }

  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-links a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: #667eea;
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid #334155;
    text-align: center;
    color: #94a3b8;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer {
      padding: 2rem 5% 1.5rem;
    }
  }
</style>
