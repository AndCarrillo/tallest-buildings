<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <NuxtLink to="/buildings_index" class="back-link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          Volver al listado
        </NuxtLink>
      </div>
    </div>

    <div class="row">
      <ContentDoc v-slot="{ doc }">
        <div class="four columns">
          <div class="image-container">
            <img
              class="building-image"
              :src="'/images/' + doc.image"
              :alt="doc.title"
            />
          </div>
        </div>
        <div class="eight columns">
          <div class="building-details">
            <div class="building-header">
              <h1 class="building-title">{{ doc.title }}</h1>
              <div class="building-stats">
                <div class="stat-badge">
                  <span class="stat-value">{{ doc.altura_m }}</span>
                  <span class="stat-label">metros</span>
                </div>
              </div>
            </div>

            <div class="building-info">
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Ciudad</span>
                  <NuxtLink
                    :to="'/cities-md/' + doc.cityId"
                    class="info-link"
                    >{{ doc.city }}</NuxtLink
                  >
                </div>
                <div class="info-item">
                  <span class="info-label">Arquitecto</span>
                  <NuxtLink
                    :to="'/architects-md/' + doc.architectId"
                    class="info-link"
                    >{{ doc.architect }}</NuxtLink
                  >
                </div>
                <div class="info-item">
                  <span class="info-label">Pisos</span>
                  <span class="info-value">{{ doc.pisos }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Año</span>
                  <span class="info-value">{{ doc.anio }}</span>
                </div>
              </div>
            </div>

            <div class="building-description">
              <h3 class="description-title">Descripción</h3>
              <div class="description-content">
                <ContentRenderer :value="doc" />
              </div>
            </div>
          </div>
        </div>
      </ContentDoc>
    </div>

    <FooterView />
  </div>
</template>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--stone-gray);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin: var(--spacing-xl) 0 var(--spacing-lg) 0;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--sage-green);
}

.image-container {
  position: sticky;
  top: var(--spacing-lg);
}

.building-image {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.building-image:hover {
  transform: scale(1.02);
}

.building-details {
  padding-left: var(--spacing-xl);
}

.building-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid rgba(135, 169, 107, 0.1);
}

.building-title {
  color: var(--forest-green);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.building-stats {
  text-align: center;
}

.stat-badge {
  background: linear-gradient(
    135deg,
    var(--mint-green),
    rgba(168, 216, 168, 0.8)
  );
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.stat-value {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--forest-green);
  line-height: 1;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--forest-green);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.building-info {
  margin-bottom: var(--spacing-2xl);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.info-label {
  font-size: var(--font-size-sm);
  color: var(--stone-gray);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-link {
  color: var(--sage-green);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.info-link:hover {
  color: var(--forest-green);
  text-decoration: underline;
}

.info-value {
  color: var(--charcoal);
  font-weight: 500;
}

.building-description {
  background: rgba(245, 242, 232, 0.5);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--mint-green);
}

.description-title {
  color: var(--forest-green);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 var(--spacing-lg) 0;
}

.description-content {
  color: var(--charcoal);
  line-height: 1.7;
}

.description-content :deep(p) {
  margin-bottom: var(--spacing-md);
}

.description-content :deep(strong) {
  color: var(--forest-green);
  font-weight: 600;
}

@media (max-width: 767px) {
  .building-details {
    padding-left: 0;
    margin-top: var(--spacing-lg);
  }

  .building-header {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .building-title {
    font-size: var(--font-size-2xl);
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .building-description {
    padding: var(--spacing-lg);
  }
}
</style>
