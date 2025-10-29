<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visible = true;
        }
      });
    });

    const section = document.querySelector('#about');
    if (section) observer.observe(section);
  });
</script>

<section id="about" class="about" class:visible>
  <div class="container">
    <div class="section-header">
      <span class="section-label">Get To Know Me</span>
      <h2 class="section-title">About Me</h2>
    </div>

    <div class="about-grid">
      <div class="about-main">
        <div class="profile-card">
          <div class="profile-avatar">
            <div class="avatar-ring"></div>
            <div class="avatar-content">ML</div>
          </div>
          <h3>Matthew Li</h3>
          <p class="role">Full-Stack Developer</p>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="education-card">
          <div class="card-icon">🎓</div>
          <h4>Education</h4>
          <div class="education-details">
            <p class="university">Hong Kong Baptist University</p>
            <p class="degree">Bachelor's Degree in Computer Science</p>
            <p class="year">Class of 2024</p>
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="story-section">
          <h3>My Journey</h3>
          <p>
            I'm a recent graduate from <strong>Hong Kong Baptist University (HKBU)</strong>, 
            where I developed a passion for creating innovative digital solutions. During my 
            time at university, I immersed myself in various aspects of software development, 
            from building full-stack applications to exploring cloud technologies.
          </p>
          <p>
            My Final Year Project was a highlight of my academic journey - developing a 
            <strong>cloud-based Near-line Video Q&A e-learning platform</strong> that integrates 
            cutting-edge technologies like Azure OpenAI and Speech-to-Text services. This project 
            taught me the importance of combining technical excellence with user-centered design.
          </p>
          <p>
            I believe in continuous learning and staying current with emerging technologies. 
            Whether it's mastering a new framework or diving into cloud architecture, I'm 
            always excited to expand my skillset and take on new challenges.
          </p>
        </div>

        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="highlight-icon">💻</div>
            <h4>Full-Stack Development</h4>
            <p>Proficient in both frontend and backend technologies, creating seamless end-to-end solutions</p>
          </div>
          
          <div class="highlight-item">
            <div class="highlight-icon">☁️</div>
            <h4>Cloud Technologies</h4>
            <p>Hands-on experience with Azure services including OpenAI, Cosmos DB, and Speech Services</p>
          </div>
          
          <div class="highlight-item">
            <div class="highlight-icon">🚀</div>
            <h4>Modern Frameworks</h4>
            <p>Building responsive applications with Vue.js, Svelte, Node.js, and Express.js</p>
          </div>
          
          <div class="highlight-item">
            <div class="highlight-icon">🗄️</div>
            <h4>Database Management</h4>
            <p>Experienced with SQL/MySQL, MongoDB, and SQLite for scalable data solutions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 8rem 5%;
    background: linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%);
    position: relative;
    overflow: hidden;
  }

  .about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-label {
    display: inline-block;
    color: #667eea;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin: 0;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 3rem;
    align-items: start;
  }

  .about-main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 2rem;
  }

  .profile-card {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
    text-align: center;
  }

  .profile-avatar {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    position: relative;
  }

  .avatar-ring {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .avatar-content {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
  }

  .profile-card h3 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 0.5rem;
  }

  .role {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: #667eea;
    color: #667eea;
    transform: translateY(-2px);
  }

  .education-card {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .education-card h4 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .university {
    color: #667eea;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .degree {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }

  .year {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .story-section {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
  }

  .story-section h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .story-section p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }

  .story-section p:last-child {
    margin-bottom: 0;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .highlight-item {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .highlight-item:hover {
    transform: translateY(-4px);
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(102, 126, 234, 0.1);
  }

  .highlight-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .highlight-item h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  .highlight-item p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
  }

  .visible .profile-card {
    animation: fadeIn 0.6s ease-out;
  }

  .visible .education-card {
    animation: fadeIn 0.6s ease-out 0.1s both;
  }

  .visible .story-section {
    animation: fadeIn 0.6s ease-out 0.2s both;
  }

  .visible .highlight-item {
    animation: fadeIn 0.6s ease-out 0.3s both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
    }

    .about-main {
      position: static;
    }

    .highlights-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .about {
      padding: 4rem 5%;
    }

    .section-title {
      font-size: 2rem;
    }

    .story-section,
    .education-card,
    .profile-card {
      padding: 1.5rem;
    }
  }
</style>
