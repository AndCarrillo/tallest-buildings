<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <div class="page-header">
          <h1 class="page-title">Edificios emblemáticos</h1>
          <p class="page-subtitle">
            Colección de los principales rascacielos 2025
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="twelve columns">
        <div class="buildings-grid">
          <ContentList path="/buildings-md" v-slot="{ list }">
            <div
              v-for="(doc, index) in sortedBuildings(list)"
              :key="doc._path"
              class="building-card"
            >
              <NuxtLink :to="doc._path" class="card-link">
                <div class="card-minimal">
                  <div class="card-ranking">
                    <span class="ranking-number">{{ index + 1 }}</span>
                  </div>
                  <div class="card-body">
                    <h3 class="building-title">{{ doc.title }}</h3>
                    <div class="building-meta">
                      <span class="height-indicator">{{ doc.altura_m }}m</span>
                      <span class="meta-location">{{ doc.city }}</span>
                    </div>
                  </div>
                  <div class="card-arrow">
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
                  </div>
                </div>
              </NuxtLink>
            </div>
          </ContentList>
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<script setup>
// Función para ordenar edificios por altura según ranking oficial CTBUH 2025
const sortedBuildings = (list) => {
  return [...list].sort((a, b) => (b.altura_m || 0) - (a.altura_m || 0));
};
</script>

<style scoped>
.page-header {
  text-align: center;
  margin: var(--spacing-2xl) 0;
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(135, 169, 107, 0.1);
}

.page-title {
  color: var(--forest-green);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.025em;
}

.page-subtitle {
  color: var(--stone-gray);
  font-size: var(--font-size-lg);
  font-weight: 400;
  margin: 0;
}

.buildings-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.building-card {
  transition: transform 0.2s ease;
}

.building-card:hover {
  transform: translateX(4px);
}

.card-minimal {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  background: var(--off-white);
  border: 1px solid rgba(135, 169, 107, 0.08);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-minimal:hover {
  background: rgba(168, 216, 168, 0.03);
  border-color: rgba(135, 169, 107, 0.15);
  box-shadow: 0 2px 8px rgba(45, 80, 22, 0.06);
}

.card-ranking {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.ranking-number {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--sage-green);
  background: rgba(135, 169, 107, 0.08);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.card-minimal:hover .ranking-number {
  background: rgba(135, 169, 107, 0.12);
  color: var(--forest-green);
}

.card-body {
  flex: 1;
  min-width: 0;
}

.building-title {
  margin: 0 0 var(--spacing-xs) 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.building-link {
  color: var(--forest-green);
  text-decoration: none;
  transition: color 0.2s ease;
}

.building-link:hover {
  color: var(--sage-green);
}

.building-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xs);
}

.height-indicator {
  font-weight: 600;
  color: var(--forest-green);
  font-size: var(--font-size-sm);
  letter-spacing: 0.025em;
}

.meta-location {
  color: var(--stone-gray);
  font-size: var(--font-size-sm);
  font-weight: 400;
}

.card-arrow {
  color: var(--stone-gray);
  opacity: 0.5;
  transition: all 0.2s ease;
}

.card-minimal:hover .card-arrow {
  opacity: 1;
  color: var(--sage-green);
  transform: translateX(2px);
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--font-size-2xl);
  }

  .card-minimal {
    padding: var(--spacing-md) var(--spacing-lg);
    gap: var(--spacing-sm);
  }

  .card-ranking {
    width: 28px;
    height: 28px;
  }

  .ranking-number {
    width: 20px;
    height: 20px;
    font-size: var(--font-size-xs);
  }

  .building-title {
    font-size: var(--font-size-base);
  }

  .building-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-link:hover {
  color: inherit;
}
</style>
