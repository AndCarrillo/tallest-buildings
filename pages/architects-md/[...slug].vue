<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <NuxtLink to="/architects_index" class="back-link">
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
        <div class="three columns">
          <div class="image-container">
            <img
              class="profile-image"
              :src="'/images/' + doc.image"
              :alt="doc.title"
            />
          </div>
        </div>
        <div class="six columns">
          <div class="profile-details">
            <div class="profile-header">
              <h1 class="profile-title">{{ doc.title }}</h1>
            </div>

            <div class="profile-description">
              <h3 class="description-title">Biografía</h3>
              <div class="description-content">
                <ContentRenderer :value="doc" />
              </div>
            </div>
          </div>
        </div>
        <div class="three columns">
          <div class="sidebar-buildings">
            <div class="related-buildings">
              <h3 class="section-title">Edificios Diseñados</h3>
              <div class="buildings-list">
                <!-- Edificios desde buildings-md -->
                <ContentQuery
                  path="/buildings-md"
                  :where="{ architectId: doc.id }"
                  v-slot="{ data }"
                >
                  <div v-for="e in data" :key="e._path" class="building-item">
                    <NuxtLink :to="e._path" class="building-link">
                      <span class="building-name">{{ e.title }}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="9,18 15,12 9,6"></polyline>
                      </svg>
                    </NuxtLink>
                  </div>
                </ContentQuery>

                <!-- Edificios desde buildings_json para SOM -->
                <div v-if="doc.title === 'Skidmore Owings & Merrill'">
                  <div
                    v-for="building in somBuildings"
                    :key="building.slug"
                    class="building-item"
                  >
                    <NuxtLink
                      :to="`/buildings_json/${building.num}`"
                      class="building-link"
                    >
                      <span class="building-name">{{ building.name }}</span>
                      <svg
                        width="14"
                        height="14"
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

.profile-image {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.profile-details {
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

.sidebar-buildings {
  position: sticky;
  top: var(--spacing-lg);
  height: fit-content;
}

.sidebar-buildings .related-buildings {
  background: var(--off-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(135, 169, 107, 0.08);
  box-shadow: var(--shadow-sm);
}

.sidebar-buildings .section-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.sidebar-buildings .building-link {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.section-title {
  color: var(--forest-green);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 var(--spacing-lg) 0;
}

.buildings-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.building-item {
  transition: transform 0.2s ease;
}

.building-item:hover {
  transform: translateX(4px);
}

.building-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(168, 216, 168, 0.05);
  border: 1px solid rgba(135, 169, 107, 0.1);
  border-radius: var(--radius-sm);
  color: var(--sage-green);
  text-decoration: none;
  transition: all 0.2s ease;
}

.building-link:hover {
  background: rgba(168, 216, 168, 0.1);
  border-color: var(--sage-green);
  color: var(--forest-green);
}

.building-name {
  font-weight: 500;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid rgba(135, 169, 107, 0.1);
}

.profile-title {
  color: var(--forest-green);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.profile-stats {
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

.profile-info {
  margin-bottom: var(--spacing-2xl);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
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

.info-value {
  color: var(--charcoal);
  font-weight: 500;
}

.profile-description {
  background: rgba(245, 242, 232, 0.5);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--mint-green);
  margin-bottom: var(--spacing-2xl);
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

.sidebar-buildings .building-link {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.section-title {
  color: var(--forest-green);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 var(--spacing-lg) 0;
}

.buildings-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.building-item {
  transition: transform 0.2s ease;
}

.building-item:hover {
  transform: translateX(4px);
}

.building-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(168, 216, 168, 0.05);
  border: 1px solid rgba(135, 169, 107, 0.1);
  border-radius: var(--radius-sm);
  color: var(--sage-green);
  text-decoration: none;
  transition: all 0.2s ease;
}

.building-link:hover {
  background: rgba(168, 216, 168, 0.1);
  border-color: var(--sage-green);
  color: var(--forest-green);
}

.building-name {
  font-weight: 500;
}

@media (max-width: 767px) {
  .profile-details {
    padding-left: 0;
    margin-top: var(--spacing-lg);
  }

  .profile-header {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .profile-title {
    font-size: var(--font-size-2xl);
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .profile-description {
    padding: var(--spacing-lg);
  }

  .sidebar-buildings {
    position: static;
    margin-top: var(--spacing-xl);
  }

  .sidebar-buildings .related-buildings {
    padding: var(--spacing-lg);
  }
}
</style>

<script setup>
// Obtener datos de edificios JSON
const buildingsData = await queryContent("buildings_json")
  .only("items")
  .findOne();
const allBuildings = buildingsData.items;

// Filtrar edificios diseñados por Skidmore Owings & Merrill
const somBuildings = allBuildings.filter(
  (building) => building.architect === "Skidmore Owings & Merrill"
);
</script>
