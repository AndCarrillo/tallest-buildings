<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <div class="page-header">
          <h1 class="page-title">Oficinas de arquitectura destacadas</h1>
          <p class="page-subtitle">Maestros del diseño arquitectónico</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="twelve columns">
        <div class="items-grid">
          <ContentList path="/architects-md" v-slot="{ list }">
            <div
              v-for="(doc, index) in list"
              :key="doc._path"
              class="item-card"
            >
              <NuxtLink :to="doc._path" class="card-link">
                <div class="card-minimal">
                  <div class="card-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="card-body">
                    <h3 class="item-title">{{ doc.title }}</h3>
                    <div class="item-meta">
                      <span
                        class="location-indicator"
                        v-if="doc.localidad && doc.pais"
                      >
                        {{ doc.localidad }}, {{ doc.pais }}
                      </span>
                      <span class="location-indicator" v-else-if="doc.pais">
                        {{ doc.pais }}
                      </span>
                      <span
                        class="location-indicator"
                        v-else-if="doc.localidad"
                      >
                        {{ doc.localidad }}
                      </span>
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

.items-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.item-card {
  transition: transform 0.2s ease;
}

.item-card:hover {
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

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--sage-green);
  background: rgba(135, 169, 107, 0.08);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.card-minimal:hover .card-icon {
  background: rgba(135, 169, 107, 0.12);
  color: var(--forest-green);
}

.card-body {
  flex: 1;
  min-width: 0;
}

.item-title {
  margin: 0 0 var(--spacing-xs) 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.item-link {
  color: var(--forest-green);
  text-decoration: none;
  transition: color 0.2s ease;
}

.item-link:hover {
  color: var(--sage-green);
}

.item-meta {
  margin-top: var(--spacing-xs);
}

.location-indicator {
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

  .card-icon {
    width: 28px;
    height: 28px;
  }

  .item-title {
    font-size: var(--font-size-base);
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
