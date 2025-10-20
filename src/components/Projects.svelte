<script lang="ts">
  interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
  }

  const projects: Project[] = [
    {
      title: "Smart Task Manager",
      description: "A full-stack web application for managing tasks with AI-powered prioritization. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization tool for common sorting and searching algorithms. Helps students understand algorithm behavior.",
      tags: ["JavaScript", "D3.js", "Algorithms"],
      github: "https://github.com/yourusername/algo-viz"
    },
    {
      title: "Campus Events Platform",
      description: "Social platform for university students to discover and create campus events. Real-time updates and notifications.",
      tags: ["TypeScript", "Svelte", "Firebase"],
      github: "https://github.com/yourusername/campus-events",
      demo: "https://campus-events-demo.com"
    },
    {
      title: "Code Snippet Manager",
      description: "Desktop application for organizing and searching code snippets with syntax highlighting and tagging system.",
      tags: ["Python", "PyQt", "SQLite"],
      github: "https://github.com/yourusername/snippet-manager"
    },
    {
      title: "Weather Forecast App",
      description: "Clean and responsive weather application with 7-day forecast, using real-time API data and geolocation.",
      tags: ["React", "API", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-app-demo.com"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with rooms, private messaging, and emoji support. Built with Socket.io.",
      tags: ["Node.js", "Socket.io", "Express"],
      github: "https://github.com/yourusername/chat-app"
    }
  ];
</script>

<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
      {#each projects as project}
        <div class="project-card">
          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            <p class="project-description">{project.description}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
          <div class="project-links">
            <a href={project.github} class="project-link" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <span class="arrow">→</span>
            </a>
            {#if project.demo}
              <a href={project.demo} class="project-link demo" target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
                <span class="arrow">→</span>
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
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

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .project-content {
    margin-bottom: 1.5rem;
  }

  .project-title {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .project-description {
    color: #475569;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: #e0e7ff;
    color: #667eea;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .project-link {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .project-link:hover {
    background: #5a67d8;
  }

  .project-link.demo {
    background: #10b981;
  }

  .project-link.demo:hover {
    background: #059669;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .project-link:hover .arrow {
    transform: translateX(4px);
  }

  @media (prefers-color-scheme: dark) {
    .projects {
      background: #0f0f0f;
    }

    .section-title {
      color: #e8e8e8;
    }

    .project-card {
      background: #1e293b;
      border-color: #334155;
    }

    .project-title {
      color: #e8e8e8;
    }

    .project-description {
      color: #cbd5e1;
    }

    .tag {
      background: #334155;
      color: #93c5fd;
    }
  }

  @media (max-width: 768px) {
    .projects {
      padding: 4rem 5%;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 2rem;
    }

    .project-links {
      flex-direction: column;
    }
  }
</style>
