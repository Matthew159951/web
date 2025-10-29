<script lang="ts">
  interface Skill {
    name: string;
    level: number;
    icon: string;
  }

  interface SkillCategory {
    title: string;
    color: string;
    skills: Skill[];
  }

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      color: "#667eea",
      skills: [
        { name: "Vue.js", level: 90, icon: "⚡" },
        { name: "Svelte", level: 85, icon: "🔥" },
        { name: "HTML & CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "💛" },
        { name: "TypeScript", level: 85, icon: "💙" }
      ]
    },
    {
      title: "Backend",
      color: "#10b981",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 87, icon: "🚂" },
        { name: "PHP", level: 75, icon: "🐘" },
        { name: "Python", level: 80, icon: "🐍" }
      ]
    },
    {
      title: "Database",
      color: "#f59e0b",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "SQL/MySQL", level: 88, icon: "🐬" },
        { name: "SQLite", level: 80, icon: "💾" },
        { name: "Cosmos DB", level: 75, icon: "☁️" }
      ]
    },
    {
      title: "Programming",
      color: "#ec4899",
      skills: [
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚙️" },
        { name: "C#", level: 75, icon: "🎯" }
      ]
    },
    {
      title: "Cloud & Tools",
      color: "#8b5cf6",
      skills: [
        { name: "Azure OpenAI", level: 82, icon: "🤖" },
        { name: "Azure Speech", level: 78, icon: "🎤" },
        { name: "GitHub", level: 90, icon: "🐙" }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📮" },
    { name: "Figma", icon: "🎨" },
    { name: "Azure Portal", icon: "☁️" }
  ];
</script>

<section id="skills" class="skills">
  <div class="container">
    <div class="section-header">
      <span class="section-label">What I Bring</span>
      <h2 class="section-title">Technical Skills</h2>
      <p class="section-description">
        A comprehensive toolkit developed through academic projects and hands-on experience
      </p>
    </div>

    <div class="skills-grid">
      {#each skillCategories as category}
        <div class="skill-category">
          <div class="category-header" style="--category-color: {category.color}">
            <h3>{category.title}</h3>
            <div class="header-decoration"></div>
          </div>
          
          <div class="skills-list">
            {#each category.skills as skill}
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-icon">{skill.icon}</span>
                  <span class="skill-name">{skill.name}</span>
                  <span class="skill-percent">{skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    style="width: {skill.level}%; background: {category.color}"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="tools-section">
      <h3>Development Tools & Environment</h3>
      <div class="tools-grid">
        {#each tools as tool}
          <div class="tool-item">
            <span class="tool-icon">{tool.icon}</span>
            <span class="tool-name">{tool.name}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="competencies-section">
      <h3>Key Competencies</h3>
      <div class="competencies-grid">
        <div class="competency-card">
          <div class="competency-icon">🌐</div>
          <h4>Full-Stack Development</h4>
          <p>End-to-end application development from UI to database</p>
        </div>
        <div class="competency-card">
          <div class="competency-icon">☁️</div>
          <h4>Cloud Architecture</h4>
          <p>Designing and deploying scalable cloud solutions</p>
        </div>
        <div class="competency-card">
          <div class="competency-icon">🔄</div>
          <h4>API Development</h4>
          <p>RESTful API design and implementation</p>
        </div>
        <div class="competency-card">
          <div class="competency-icon">🎯</div>
          <h4>Agile Methodology</h4>
          <p>Collaborative development with agile practices</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 8rem 5%;
    background: linear-gradient(180deg, #1a1a2e 0%, #0f0f23 100%);
    position: relative;
  }

  .skills::before {
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
    color: rgba(255, 255, 255, 0.95);
    margin: 0 0 1rem 0;
  }

  .section-description {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .skill-category {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }

  .category-header {
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, var(--category-color) 0%, color-mix(in srgb, var(--category-color) 80%, black) 100%);
    position: relative;
    overflow: hidden;
  }

  .category-header h3 {
    color: rgba(255, 255, 255, 0.98);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .header-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(15, 15, 35, 0.3);
  }

  .skills-list {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .skill-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .skill-icon {
    font-size: 1.5rem;
  }

  .skill-name {
    flex: 1;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    font-size: 1rem;
  }

  .skill-percent {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .skill-bar {
    height: 8px;
    background: rgba(15, 15, 35, 0.8);
    border-radius: 10px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    border-radius: 10px;
    transition: width 1s ease-out;
    position: relative;
  }

  .skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.4), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .tools-section {
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 4rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .tools-section h3 {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  .tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem;
    background: rgba(15, 15, 35, 0.6);
    border-radius: 12px;
    border: 2px solid rgba(102, 126, 234, 0.2);
    transition: all 0.3s ease;
  }

  .tool-item:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }

  .tool-icon {
    font-size: 2.5rem;
  }

  .tool-name {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .competencies-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 3rem;
  }

  .competencies-section h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
    color: rgba(255, 255, 255, 0.98);
  }

  .competencies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .competency-card {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .competency-card:hover {
    background: rgba(15, 15, 35, 0.6);
    transform: translateY(-4px);
    border-color: rgba(102, 126, 234, 0.5);
  }

  .competency-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .competency-card h4 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: rgba(255, 255, 255, 0.95);
  }

  .competency-card p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .skills {
      padding: 4rem 5%;
    }

    .section-title {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .competencies-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
