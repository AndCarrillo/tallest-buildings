<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <NuxtLink to="/cities_index" class="back-link">
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
              class="city-image"
              :src="'/images/' + doc.image"
              :alt="doc.title"
            />
          </div>
        </div>
        <div class="six columns">
          <div class="city-details">
            <div class="city-header">
              <h1 class="city-title">{{ doc.title }}</h1>
              <div class="city-stats">
                <div class="stat-badge">
                  <span class="stat-value"
                    >{{ (doc.poblacion / 1000000).toFixed(1) }}M</span
                  >
                  <span class="stat-label">habitantes</span>
                </div>
              </div>
            </div>

            <div class="city-info">
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">País</span>
                  <span class="info-value">{{ doc.pais }}</span>
                </div>
              </div>
            </div>

            <div class="city-description">
              <h3 class="description-title">Descripción</h3>
              <div class="description-content">
                <ContentRenderer :value="doc" />
              </div>
            </div>
          </div>
        </div>
        <div class="three columns">
          <div class="sidebar-content">
            <!-- Edificios Emblemáticos -->
            <div class="related-buildings" v-if="cityBuildings.length > 0">
              <h3 class="section-title">Edificios Emblemáticos</h3>
              <div class="buildings-list">
                <div
                  v-for="building in cityBuildings"
                  :key="building.num"
                  class="building-item"
                >
                  <NuxtLink
                    :to="`/buildings_json/${building.num}`"
                    class="building-link"
                  >
                    <div class="building-info">
                      <span class="building-name">{{ building.name }}</span>
                      <span class="building-height"
                        >{{ building.altura_m }}m</span
                      >
                    </div>
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

            <!-- Arquitectos Destacados -->
            <div class="related-architects" v-if="cityArchitects.length > 0">
              <h3 class="section-title">Arquitectos Destacados</h3>
              <div class="architects-list">
                <div
                  v-for="architect in cityArchitects"
                  :key="architect.name"
                  class="architect-item"
                >
                  <NuxtLink
                    v-if="architect.url"
                    :to="architect.url"
                    class="architect-link"
                  >
                    <div class="architect-info">
                      <span class="architect-name">{{ architect.name }}</span>
                      <span class="building-count"
                        >{{ architect.count }} edificio{{
                          architect.count > 1 ? "s" : ""
                        }}</span
                      >
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </NuxtLink>
                  <div v-else class="architect-info-static">
                    <span class="architect-name">{{ architect.name }}</span>
                    <span class="building-count"
                      >{{ architect.count }} edificio{{
                        architect.count > 1 ? "s" : ""
                      }}</span
                    >
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

<script setup>
// Obtener datos de edificios
const buildingsData = await queryContent("buildings_json")
  .only("items")
  .findOne();
const allBuildings = buildingsData.items;

// Obtener la ciudad actual
const route = useRoute();
const cityDoc = await queryContent("cities-md")
  .where({ _path: route.path })
  .findOne();

// Filtrar edificios de esta ciudad
const cityBuildings = allBuildings.filter(
  (building) => building.city === cityDoc.title
);

// Mapeo de arquitectos del JSON a las URLs de archivos markdown
const architectMapping = {
  "Skidmore, Owings & Merrill": "/architects-md/arq_01",
  "Kohn Pedersen Fox": "/architects-md/arq_02",
  "Fender Katsalidis Architects": "/architects-md/arq_03",
  "Dar al-Handasah + SL Rasch": "/architects-md/arq_04",
  Gensler: "/architects-md/arq_05",
  "C.Y. Lee & Partners": "/architects-md/arq_06",
};

// Agrupar arquitectos y contar edificios
const architectsCount = {};
cityBuildings.forEach((building) => {
  if (architectsCount[building.architect]) {
    architectsCount[building.architect]++;
  } else {
    architectsCount[building.architect] = 1;
  }
});

// Crear lista de arquitectos con enlaces
const cityArchitects = Object.entries(architectsCount).map(([name, count]) => ({
  name,
  count,
  url: architectMapping[name],
}));
</script>

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

.city-image {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.city-image:hover {
  transform: scale(1.02);
}

.city-details {
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

.sidebar-content {
  position: sticky;
  top: var(--spacing-lg);
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.related-buildings,
.related-architects {
  background: var(--off-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(135, 169, 107, 0.08);
  box-shadow: var(--shadow-sm);
}

.section-title {
  color: var(--forest-green);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 0 var(--spacing-md) 0;
}

.buildings-list,
.architects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.building-item,
.architect-item {
  transition: transform 0.2s ease;
}

.building-item:hover,
.architect-item:hover {
  transform: translateX(4px);
}

.building-link,
.architect-link {
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

.building-link:hover,
.architect-link:hover {
  background: rgba(168, 216, 168, 0.1);
  border-color: var(--sage-green);
  color: var(--forest-green);
}

.building-info,
.architect-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex: 1;
}

.building-name,
.architect-name {
  font-weight: 600;
  font-size: var(--font-size-sm);
}

.building-height,
.building-count {
  font-size: var(--font-size-xs);
  color: var(--stone-gray);
  font-weight: 400;
}

.architect-info-static {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(135, 169, 107, 0.05);
  border: 1px solid rgba(135, 169, 107, 0.1);
  border-radius: var(--radius-sm);
  color: var(--stone-gray);
}

.city-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid rgba(135, 169, 107, 0.1);
}

.city-title {
  color: var(--forest-green);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.city-stats {
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

.city-info {
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

.city-description {
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

.description-content :deep(strong) {
  color: var(--forest-green);
  font-weight: 600;
}

@media (max-width: 767px) {
  .city-details {
    padding-left: 0;
    margin-top: var(--spacing-lg);
  }

  .city-header {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .city-title {
    font-size: var(--font-size-2xl);
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .city-description {
    padding: var(--spacing-lg);
  }

  .sidebar-content {
    position: static;
    margin-top: var(--spacing-xl);
  }

  .related-buildings,
  .related-architects {
    padding: var(--spacing-lg);
  }
}
</style>
