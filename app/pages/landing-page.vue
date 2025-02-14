<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Announcement Banner -->
    <div class="announcement-banner" role="banner">
      <p>Introducing Aceternity UI Pro - Premium component packs and templates to build awesome websites.</p>
    </div>

    <!-- Main Header -->
    <header class="site-header" role="banner">
      <a href="/" class="logo" aria-label="Aceternity UI Home">
        <img src="https://dummyimage.com/120x40/E8117F/FFFFFF" alt="Aceternity UI Logo">
      </a>
      <nav role="navigation" aria-label="Main navigation">
        <ul class="primary-nav">
          <li><a href="/components">Components</a></li>
          <li><a href="/templates">Templates <span class="badge">new</span></a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/showcase">Showcase</a></li>
        </ul>
      </nav>
      <div class="secondary-nav">
        <a href="/discord">Discord</a>
        <a href="/twitter">Twitter</a>
        <button aria-label="Toggle theme" class="theme-toggle">
          🌙
        </button>
        <div class="search">
          <label for="search" class="visually-hidden">Search Components</label>
          <input id="search" type="search" placeholder="Search Components">
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main>
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-badge">
            <span>Introducing</span>
            <a href="/proactiv">Proactiv Template →</a>
          </div>
          <h1 class="hero-title">
            Make your websites look 10x awesome
          </h1>
          <p class="hero-description">
            Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
          </p>
          <div class="hero-actions">
            <a href="/components" class="button button-primary">Browse Components</a>
            <a href="/custom" class="button button-secondary">Custom Components</a>
          </div>
          <div class="tech-stack" aria-label="Technology stack">
            <img src="https://dummyimage.com/24x24" alt="Next.js">
            <img src="https://dummyimage.com/24x24" alt="React">
            <img src="https://dummyimage.com/24x24" alt="TailwindCSS">
            <img src="https://dummyimage.com/24x24" alt="Framer Motion">
          </div>
        </div>
        <div class="hero-preview">
          <div class="card-grid">
            <article class="card">
              <h2>Beautify your website within minutes</h2>
              <p>With Aceternity UI, you can build great looking websites within minutes.</p>
            </article>
            <article class="card">
              <h2>Amazing TailwindCSS Grid Layouts</h2>
              <p>Copy paste components like these in minutes.</p>
              <time datetime="2023-03-28">28th March, 2023</time>
              <a href="/read-more" class="button">Read More</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  background-color: #0a0a0a;
  color: #ffffff;
}

/* Announcement banner */
.announcement-banner {
  background: linear-gradient(90deg, #d53f8c, #805ad5);
  color: white;
  text-align: center;
  padding: 0.75rem;
}

/* Header styles */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
}

.site-header nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.primary-nav {
  display: flex;
  gap: 1.5rem;
}

.secondary-nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* Hero section styles */
.hero-section {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  gap: 0.5rem;
  width: fit-content;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.25rem;
  color: #a0aec0;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.tech-stack {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: center;
}

/* Button styles */
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.button-primary {
  background-color: white;
  color: black;
}

.button-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Card grid styles */
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.card {
  background-color: #1a1a1a;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

/* Utility classes */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
