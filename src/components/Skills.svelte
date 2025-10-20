<script lang="ts">
  interface Skill {
    name: string;
    level: number;
    category: string;
  }

  const skills: Skill[] = [
    { name: "Python", level: 90, category: "Languages" },
    { name: "Java", level: 85, category: "Languages" },
    { name: "TypeScript", level: 80, category: "Languages" },
    { name: "C++", level: 75, category: "Languages" },
    { name: "JavaScript", level: 85, category: "Languages" },
    { name: "React", level: 80, category: "Frameworks" },
    { name: "Svelte", level: 75, category: "Frameworks" },
    { name: "Node.js", level: 80, category: "Frameworks" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "SQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" }
  ];

  const categories = [...new Set(skills.map(s => s.category))];
</script>

<section id="skills" class="skills">
  <div class="container">
    <h2 class="section-title">Skills & Technologies</h2>
    <div class="skills-grid">
      {#each categories as category}
        <div class="category-section">
          <h3 class="category-title">{category}</h3>
          <div class="skills-list">
            {#each skills.filter(s => s.category === category) as skill}
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{skill.name}</span>
                  <span class="skill-percentage">{skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: {skill.level}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 6rem 5%;
    background: white;
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .category-section {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .category-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .category-title {
    font-size: 1.5rem;
    color: #667eea;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-item {
    width: 100%;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .skill-name {
    font-weight: 600;
    color: #334155;
  }

  .skill-percentage {
    color: #667eea;
    font-weight: 600;
  }

  .skill-bar {
    width: 100%;
    height: 10px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 10px;
    transition: width 1s ease;
    animation: fillBar 1.5s ease-in-out;
  }

  @keyframes fillBar {
    from {
      width: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    .skills {
      background: #1e293b;
    }

    .section-title {
      color: #e8e8e8;
    }

    .category-section {
      background: #0f172a;
    }

    .skill-name {
      color: #e8e8e8;
    }

    .skill-bar {
      background: #334155;
    }
  }

  @media (max-width: 768px) {
    .skills {
      padding: 4rem 5%;
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }
  }
</style>
