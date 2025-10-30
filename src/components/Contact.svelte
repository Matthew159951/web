<script lang="ts">
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit(e: Event) {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:23214759@life.hkbu.edu.hk?subject=${subject}&body=${body}`;
    
    // Reset form
    formData = { name: '', email: '', message: '' };
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/matthew159951', icon: '🐙' },
    { name: 'Email', url: 'mailto:23214759@life.hkbu.edu.hk', icon: '📧' }
  ];
</script>

<section id="contact" class="contact">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <p class="section-subtitle">
      Have a question or want to work together? Feel free to reach out!
    </p>

    <div class="contact-content">
      <div class="contact-info">
        <h3>Let's Connect</h3>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        
        <div class="social-links">
          {#each socialLinks as social}
            <a href={social.url} class="social-link" target="_blank" rel="noopener noreferrer">
              <span class="icon">{social.icon}</span>
              <span>{social.name}</span>
            </a>
          {/each}
        </div>
      </div>

      <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            placeholder="Your Name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="5"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</section>

<style>
  .contact {
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
    margin-bottom: 1rem;
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

  .section-subtitle {
    text-align: center;
    color: #475569;
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info h3 {
    font-size: 2rem;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .contact-info p {
    color: #475569;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;
    text-decoration: none;
    color: #334155;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: #667eea;
    color: white;
    transform: translateX(8px);
  }

  .icon {
    font-size: 1.5rem;
  }

  .contact-form {
    background: #f8fafc;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #334155;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #667eea;
  }

  textarea {
    resize: vertical;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }

  @media (prefers-color-scheme: dark) {
    .contact {
      background: #1e293b;
    }

    .section-title,
    .contact-info h3 {
      color: #e8e8e8;
    }

    .section-subtitle,
    .contact-info p {
      color: #cbd5e1;
    }

    .social-link {
      background: #0f172a;
      color: #e8e8e8;
    }

    .contact-form {
      background: #0f172a;
    }

    label {
      color: #e8e8e8;
    }

    input,
    textarea {
      background: #1e293b;
      border-color: #334155;
      color: #e8e8e8;
    }

    input::placeholder,
    textarea::placeholder {
      color: #64748b;
    }
  }

  @media (max-width: 768px) {
    .contact {
      padding: 4rem 5%;
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .contact-form {
      padding: 1.5rem;
    }
  }
</style>
