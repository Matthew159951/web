<script lang="ts">
  import Fyp_video from '../static/fyp-demo.mp4';
  import Fyp_image1 from '../static/fyp1.png';
  import Fyp_image2 from '../static/fyp2.png';
  import Fyp_poster from '../static/fyp-poster.png';
  import { onMount } from 'svelte';

  interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    images?: string[];
    video?: string;
    videoPoster?: string;
  }

  const projects: Project[] = [
    {
      title: "Cloud-based Near-line Video Q&A elearning Platform",
      description: "Final Year Project at HKBU - An innovative cloud platform enabling students to upload screen capture videos or images of questions for lab work and debugging. Integrates Azure OpenAI for intelligent responses, Speech-to-Text for accessibility, and MongoDB for scalable data management. Developed a real-time communication system connecting students, TAs, and instructors.",
      tags: ["Svelte", "Node.js", "MongoDB", "Azure OpenAI","TypeScript","Speech to Text","Express.js","Cosmos DB","Final Year Project"],
      images: [Fyp_image1, Fyp_image2, Fyp_poster],
      video: Fyp_video,
      videoPoster: Fyp_poster
    },
    {
      title: "Full-Stack Web Application with Vue.js",
      description: "Developed a responsive web application using Vue.js framework with Express.js backend. Implemented RESTful API endpoints, user authentication, and real-time data synchronization. Utilized MySQL for relational data management.",
      tags: ["Vue.js", "Express.js", "Node.js", "MySQL", "JavaScript", "HTML & CSS"],
      github: "https://github.com/yourusername/vue-app"
    }
  ];

  let currentImageIndex: { [key: number]: number } = {};
  let selectedProject: Project | null = null;
  let selectedImageIndex: number = 0;
  let showVideoModal: boolean = false;
  let selectedVideo: string | null = null;
  let selectedVideoPoster: string | null = null;
  
  onMount(() => {
    projects.forEach((project, index) => {
      if (project.images && project.images.length > 1) {
        currentImageIndex[index] = 0;
        setInterval(() => {
          currentImageIndex[index] = (currentImageIndex[index] + 1) % project.images!.length;
        }, 3000);
      }
    });
  });

  function openModal(project: Project, imageIndex: number) {
    selectedProject = project;
    selectedImageIndex = imageIndex;
  }

  function closeModal() {
    selectedProject = null;
  }

  function nextImage() {
    if (selectedProject?.images) {
      selectedImageIndex = (selectedImageIndex + 1) % selectedProject.images.length;
    }
  }

  function prevImage() {
    if (selectedProject?.images) {
      selectedImageIndex = (selectedImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    }
  }

  function openVideoModal(video: string | undefined, poster?: string) {
    if (!video) return;
    selectedVideo = video;
    selectedVideoPoster = poster || null;
    showVideoModal = true;
  }

  function closeVideoModal() {
    showVideoModal = false;
    selectedVideo = null;
    selectedVideoPoster = null;
  }
</script>

<section id="projects" class="projects">
  <div class="container">
    <div class="section-header">
      <span class="section-label">My Work</span>
      <h2 class="section-title">Featured Projects</h2>
    </div>
    <div class="projects-grid">
      {#each projects as project, index}
        <div class="project-card">
          {#if project.images && project.images.length > 0}
            <div class="project-image" on:click={() => openModal(project, currentImageIndex[index] || 0)}>
              <div class="carousel">
                {#each project.images as image, imgIndex}
                  <img 
                    src={image} 
                    alt={`${project.title} - ${imgIndex + 1}`}
                    class:active={currentImageIndex[index] === imgIndex}
                  />
                {/each}
              </div>
              <div class="view-overlay">
                <span>Click to view larger</span>
              </div>
              {#if project.images.length > 1}
                <div class="carousel-indicators">
                  {#each project.images as _, imgIndex}
                    <button 
                      class="indicator"
                      class:active={currentImageIndex[index] === imgIndex}
                      on:click|stopPropagation={() => currentImageIndex[index] = imgIndex}
                      aria-label={`Go to image ${imgIndex + 1}`}
                    ></button>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
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
            {#if project.video}
              <button class="project-link video-btn" on:click={() => openVideoModal(project.video, project.videoPoster)}>
                <span>▶ Watch Demo Video</span>
              </button>
            {:else}
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
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

{#if selectedProject}
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="close-btn" on:click={closeModal} aria-label="Close">×</button>
      
      <div class="modal-body">
        <div class="modal-image-section">
          {#if selectedProject.images && selectedProject.images.length > 1}
            <button class="nav-btn prev" on:click={prevImage} aria-label="Previous image">‹</button>
          {/if}
          
          <div class="modal-image-container">
            {#if selectedProject.images}
              <img src={selectedProject.images[selectedImageIndex]} alt={selectedProject.title} />
            {/if}
          </div>
          
          {#if selectedProject.images && selectedProject.images.length > 1}
            <button class="nav-btn next" on:click={nextImage} aria-label="Next image">›</button>
          {/if}
        </div>
        
        <div class="modal-info">
          <h3>{selectedProject.title}</h3>
          <p class="modal-description">{selectedProject.description}</p>
          
          <div class="modal-tags">
            {#each selectedProject.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          
          {#if selectedProject.images && selectedProject.images.length > 1}
            <div class="modal-thumbnails">
              {#each selectedProject.images as image, imgIndex}
                <button 
                  class="thumbnail"
                  class:active={selectedImageIndex === imgIndex}
                  on:click={() => selectedImageIndex = imgIndex}
                >
                  <img src={image} alt={`${selectedProject.title} thumbnail ${imgIndex + 1}`} />
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

{#if showVideoModal && selectedVideo}
  <div class="modal-overlay" on:click={closeVideoModal}>
    <div class="video-modal-content" on:click|stopPropagation>
      <button class="close-btn" on:click={closeVideoModal} aria-label="Close">×</button>
      <div class="video-container">
        <video 
          controls 
          autoplay 
          poster={selectedVideoPoster}
          class="demo-video"
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
{/if}

<style>
  .projects {
    padding: 8rem 5%;
    background: linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%);
    position: relative;
  }

  .projects::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
  }

  .container {
    max-width: 1200px;
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
    margin: 0;
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
    background: rgba(30, 30, 46, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }

  .project-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  .carousel {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out, transform 0.3s ease;
  }

  .carousel img.active {
    opacity: 1;
    z-index: 1;
  }

  .project-card:hover .carousel img.active {
    transform: scale(1.05);
  }

  .view-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 35, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
    font-size: 1.1rem;
  }

  .project-image:hover .view-overlay {
    opacity: 1;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 4;
  }

  .indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(102, 126, 234, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }

  .indicator:hover {
    background: rgba(102, 126, 234, 0.8);
    transform: scale(1.2);
  }

  .indicator.active {
    background: #667eea;
    width: 24px;
    border-radius: 4px;
  }

  .project-content {
    margin-bottom: 1.5rem;
    padding: 2rem 2rem 0;
  }

  .project-title {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .project-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: rgba(102, 126, 234, 0.2);
    color: #93c5fd;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid rgba(102, 126, 234, 0.3);
  }

  .project-links {
    display: flex;
    gap: 1rem;
    padding: 0 2rem 2rem;
  }

  .project-link {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(102, 126, 234, 0.8);
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(102, 126, 234, 0.5);
  }

  .project-link:hover {
    background: rgba(102, 126, 234, 1);
    border-color: #667eea;
  }

  .project-link.demo {
    background: rgba(16, 185, 129, 0.8);
    border-color: rgba(16, 185, 129, 0.5);
  }

  .project-link.demo:hover {
    background: rgba(16, 185, 129, 1);
    border-color: #10b981;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .project-link:hover .arrow {
    transform: translateX(4px);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    overflow-y: auto;
  }

  .modal-content {
    background: rgba(30, 30, 46, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    max-width: 1400px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(15, 15, 35, 0.8);
    color: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(102, 126, 234, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .close-btn:hover {
    background: rgba(15, 15, 35, 0.95);
    border-color: #667eea;
    transform: scale(1.1);
  }

  .modal-body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  .modal-image-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-image-container {
    width: 100%;
    max-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-image-container img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
  }

  .nav-btn {
    position: absolute;
    background: rgba(15, 15, 35, 0.8);
    color: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(102, 126, 234, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  .nav-btn:hover {
    background: rgba(15, 15, 35, 0.95);
    border-color: #667eea;
    transform: scale(1.1);
  }

  .nav-btn.prev {
    left: -25px;
  }

  .nav-btn.next {
    right: -25px;
  }

  .modal-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .modal-info h3 {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
  }

  .modal-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    font-size: 1rem;
  }

  .modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .modal-thumbnails {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .thumbnail {
    aspect-ratio: 16/9;
    border: 2px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    padding: 0;
    background: none;
    transition: all 0.3s ease;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail:hover {
    border-color: #667eea;
    transform: scale(1.05);
  }

  .thumbnail.active {
    border-color: #667eea;
  }

  .video-btn {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-size: 1.05rem;
  }

  .video-btn:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6a3f8f 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  .video-modal-content {
    background: #000;
    border-radius: 16px;
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
    overflow: hidden;
    border: 4px solid #667eea;
    box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.2), 0 25px 50px rgba(0, 0, 0, 0.5);
  }

  .video-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .demo-video {
    width: 100%;
    height: auto;
    max-height: 90vh;
    display: block;
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

    .modal-body {
      grid-template-columns: 1fr;
    }

    .modal-image-container {
      max-height: 50vh;
    }

    .nav-btn.prev {
      left: 10px;
    }

    .nav-btn.next {
      right: 10px;
    }

    .modal-thumbnails {
      grid-template-columns: repeat(2, 1fr);
    }

    .video-modal-content {
      max-width: 95vw;
      border: 3px solid #667eea;
      box-shadow: 0 0 0 6px rgba(102, 126, 234, 0.2), 0 25px 50px rgba(0, 0, 0, 0.5);
    }

    .demo-video {
      max-height: 80vh;
    }
  }
</style>
