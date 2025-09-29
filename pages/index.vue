<template>
  <div class="container">
    <HeaderView />

    <!-- Hero Section with Image -->
    <div class="hero-section">
      <div class="hero-image">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1 class="hero-title">Catálogo de Arquitectura</h1>
            <p class="hero-subtitle">
              Los primeros 12 rascacielos más altos del mundo y las firmas de
              arquitectos que los crearon
            </p>
            <NuxtLink to="/buildings_json" class="hero-cta">
              <span>Explorar Ranking Mundial</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="row">
      <div class="twelve columns">
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">12</div>
              <div class="stat-label">Rascacielos</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">11</div>
              <div class="stat-label">Ciudades</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">6</div>
              <div class="stat-label">Oficinas de Arquitectura</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  margin: var(--spacing-lg) 0 var(--spacing-xl) 0;
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(45, 80, 22, 0.15);
}

.hero-image {
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 350px;
  max-height: 450px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 80, 22, 0.8) 0%,
    rgba(135, 169, 107, 0.6) 50%,
    rgba(168, 216, 168, 0.4) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 600px;
  padding: var(--spacing-xl);
}

.hero-title {
  font-size: var(--font-size-3xl);
  font-weight: 300;
  margin: 0 0 var(--spacing-lg) 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  font-weight: 300;
  margin: 0 0 var(--spacing-2xl) 0;
  color: darkgreen;
  line-height: 1.5;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-md);
  color: white;
  text-decoration: none;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* Statistics Section */
.stats-section {
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md) 0;
  background: rgba(245, 242, 232, 0.6);
  border-radius: var(--radius-lg);
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);
}

.stat-item {
  text-align: center;
  min-width: 100px;
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 200;
  color: var(--forest-green);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--stone-gray);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Media Queries */
@media (max-width: 767px) {
  .hero-image {
    height: 50vh;
    min-height: 300px;
  }

  .hero-content {
    padding: var(--spacing-lg);
  }

  .hero-title {
    font-size: var(--font-size-2xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xl);
  }

  .hero-cta {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-sm);
  }

  .stats-grid {
    gap: var(--spacing-lg);
  }

  .stat-number {
    font-size: var(--font-size-2xl);
  }

  .stat-label {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .stat-item {
    min-width: unset;
  }
}
</style>
