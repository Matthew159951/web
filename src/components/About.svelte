<script lang="ts">
  const educationItems = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      gpa: "3.8/4.0"
    }
  ];

  const interests = [
    "🤖 Artificial Intelligence",
    "🌐 Web Development",
    "📊 Data Structures & Algorithms",
    "☁️ Cloud Computing"
  ];
</script>

<section id="about" class="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <div class="about-text">
        <p class="intro">
          I'm a dedicated Computer Science student with a strong passion for technology 
          and problem-solving. I love turning complex problems into simple, elegant solutions.
        </p>
        <p>
          Throughout my academic journey, I've developed a solid foundation in software 
          development, data structures, algorithms, and modern web technologies. I'm always 
          eager to learn new technologies and apply them to real-world projects.
        </p>
        <p>
          When I'm not coding, you can find me contributing to open-source projects, 
          participating in hackathons, or exploring the latest tech trends.
        </p>
      </div>
      
      <div class="sidebar">
        <div class="education-card">
          <h3>🎓 Education</h3>
          {#each educationItems as edu}
            <div class="edu-item">
              <h4>{edu.degree}</h4>
              <p class="institution">{edu.institution}</p>
              <p class="period">{edu.period}</p>
              <p class="gpa">GPA: {edu.gpa}</p>
            </div>
          {/each}
        </div>

        <div class="interests-card">
          <h3>💡 Interests</h3>
          <ul class="interests-list">
            {#each interests as interest}
              <li>{interest}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 5%;
    background: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #1e293b;
    position: relative;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #475569;
  }

  .intro {
    font-size: 1.25rem;
    font-weight: 500;
    color: #334155;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .education-card,
  .interests-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .education-card:hover,
  .interests-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .education-card h3,
  .interests-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
  }

  .edu-item h4 {
    font-size: 1.1rem;
    color: #334155;
    margin-bottom: 0.5rem;
  }

  .institution {
    color: #667eea;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .period,
  .gpa {
    color: #64748b;
    font-size: 0.95rem;
  }

  .interests-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .interests-list li {
    font-size: 1rem;
    color: #475569;
    padding: 0.5rem;
    background: #f1f5f9;
    border-radius: 6px;
    transition: background 0.3s ease;
  }

  .interests-list li:hover {
    background: #e2e8f0;
  }

  @media (prefers-color-scheme: dark) {
    .about {
      background: #0f0f0f;
    }

    .section-title {
      color: #e8e8e8;
    }

    .about-text p {
      color: #cbd5e1;
    }

    .intro {
      color: #e8e8e8;
    }

    .education-card,
    .interests-card {
      background: #1e293b;
    }

    .education-card h3,
    .interests-card h3,
    .edu-item h4 {
      color: #e8e8e8;
    }

    .period,
    .gpa {
      color: #94a3b8;
    }

    .interests-list li {
      color: #cbd5e1;
      background: #334155;
    }

    .interests-list li:hover {
      background: #475569;
    }
  }

  @media (max-width: 768px) {
    .about {
      padding: 4rem 5%;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }
  }
</style>
