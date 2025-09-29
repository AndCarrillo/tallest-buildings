<template>
  <div class="container">
    <HeaderView />

    <div class="row">
      <div class="twelve columns">
        <NuxtLink to="/buildings_json" class="back-link">
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
      <div class="twelve columns">
        <div class="building-details">
          <div class="building-header">
            <h1 class="building-title">{{ item.name }}</h1>
            <div class="building-stats">
              <div class="stat-badge">
                <span class="stat-value">{{ item.altura_m }}</span>
                <span class="stat-label">metros</span>
              </div>
            </div>
          </div>

          <div class="building-info">
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Ciudad</span>
                <NuxtLink v-if="cityUrl" :to="cityUrl" class="city-link">
                  <span class="info-value">{{ item.city }}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="city-icon"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </NuxtLink>
                <span v-else class="info-value">{{ item.city }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Arquitecto</span>
                <NuxtLink
                  v-if="architectUrl"
                  :to="architectUrl"
                  class="architect-link"
                >
                  <span class="info-value">{{ item.architect }}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="architect-icon"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </NuxtLink>
                <span v-else class="info-value">{{ item.architect }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Altura</span>
                <span class="info-value">{{ item.altura_m }}m</span>
              </div>
              <div class="info-item">
                <span class="info-label">Año</span>
                <span class="info-value">{{ item.year }}</span>
              </div>
            </div>
          </div>

          <div class="building-description">
            <h3 class="description-title">Información del Edificio</h3>
            <div class="description-content">
              <div v-if="item.name === 'Burj Khalifa'">
                <p>
                  El <strong>{{ item.name }}</strong> es el edificio más alto
                  del mundo, ubicado en <strong>{{ item.city }}</strong
                  >, Emiratos Árabes Unidos. Diseñado por el reconocido
                  arquitecto <strong>{{ item.architect }}</strong
                  >, esta torre de {{ item.altura_m }} metros fue completada en
                  {{ item.year }} y redefinió los límites de la arquitectura
                  vertical.
                </p>
                <p>
                  El diseño se deriva de los sistemas de modelado incorporados
                  en la arquitectura islámica, con la huella del triple lobulado
                  basada en una versión abstracta de las Hymenocallis, una flor
                  del desierto nativa de la región de Dubái. Su plataforma de
                  observación es una de las atracciones turísticas más
                  populares, con más de 1.87 millones de visitantes anuales.
                </p>
                <p>
                  Situado en el corazón de Dubái, ciudad que ha experimentado un
                  crecimiento extraordinario desde sus orígenes como puerto
                  pesquero hasta convertirse en un enlace global para mercancías
                  y pasajeros, con más de 3.3 millones de habitantes en su área
                  metropolitana.
                </p>
              </div>
              <div v-else-if="item.name === 'Merdeka 118'">
                <p>
                  El <strong>{{ item.name }}</strong> es el segundo rascacielos
                  más alto del mundo (2025), ubicado en
                  <strong>{{ item.city }}</strong
                  >, Malasia. Diseñado por el reconocido arquitecto
                  <strong>{{ item.architect }}</strong
                  >, esta imponente estructura de {{ item.altura_m }} metros fue
                  completada en {{ item.year }} y representa un hito
                  arquitectónico para el sudeste asiático.
                </p>
                <p>
                  Con sus 118 pisos, este rascacielos simboliza la independencia
                  de Malasia ("Merdeka" significa independencia en malayo) y se
                  ha convertido en el nuevo ícono del skyline de Kuala Lumpur.
                  Su diseño fusiona elementos modernos con referencias
                  culturales malayas, creando una identidad arquitectónica
                  única.
                </p>
                <p>
                  Situado en el corazón de Kuala Lumpur, capital de Malasia y
                  centro económico del sudeste asiático, este edificio marca un
                  nuevo capítulo en la arquitectura de superestructuras a nivel
                  mundial.
                </p>
              </div>
              <div v-else-if="item.name === 'Shanghai Tower'">
                <p>
                  La <strong>{{ item.name }}</strong> es el tercer rascacielos
                  más alto del mundo (2025), ubicada en
                  <strong>{{ item.city }}</strong
                  >, China. Diseñada por <strong>{{ item.architect }}</strong
                  >, esta impresionante estructura de {{ item.altura_m }} metros
                  fue completada en {{ item.year }} y es muy emblemática por su
                  diseño helicoidal.
                </p>
                <p>
                  Su diseño innovador presenta una forma de torsión espiral que
                  reduce significativamente la resistencia al viento y optimiza
                  la eficiencia energética. La torre representa la modernización
                  de Shanghái y su consolidación como centro financiero global,
                  siendo uno de los rascacielos más reconocibles por su
                  arquitectura distintiva.
                </p>
              </div>
              <div v-else>
                <p>
                  <strong>{{ item.name }}</strong> es un rascacielos emblemático
                  ubicado en {{ item.city }}, diseñado por {{ item.architect }}.
                  Con una altura de {{ item.altura_m }} metros, fue completado
                  en {{ item.year }} y representa un hito importante en la
                  arquitectura moderna.
                </p>
                <p>
                  Este edificio forma parte de la colección de rascacielos más
                  notables del mundo, destacando por su diseño innovador y su
                  contribución al skyline urbano de {{ item.city }}.
                </p>
              </div>
            </div>
          </div>

          <div class="building-features">
            <h3 class="features-title">Características Técnicas</h3>
            <div class="features-grid">
              <template v-if="item.name === 'Burj Khalifa'">
                <div class="feature-card">
                  <div class="feature-icon">🏗️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Récord Mundial</h4>
                    <p class="feature-text">
                      Edificio más alto del mundo con 828 metros
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🕌</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Diseño</h4>
                    <p class="feature-text">
                      Inspirado en arquitectura islámica y flor Hymenocallis
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🏙️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Ubicación</h4>
                    <p class="feature-text">
                      Corazón de Dubái, metrópolis de 3.3M habitantes
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">👁️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Turismo</h4>
                    <p class="feature-text">
                      Más de 1.87M visitantes anuales en su observatorio
                    </p>
                  </div>
                </div>
              </template>

              <template v-else-if="item.name === 'Merdeka 118'">
                <div class="feature-card">
                  <div class="feature-icon">🥈</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Segundo Mundial</h4>
                    <p class="feature-text">
                      Segundo edificio más alto del mundo con 679 metros
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🇲🇾</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Símbolo Nacional</h4>
                    <p class="feature-text">
                      Representa la independencia de Malasia ("Merdeka")
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🏢</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Estructura</h4>
                    <p class="feature-text">
                      118 pisos con diseño fusionando modernidad y cultura
                      malaya
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🌏</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Sudeste Asiático</h4>
                    <p class="feature-text">
                      Nuevo ícono arquitectónico de Kuala Lumpur
                    </p>
                  </div>
                </div>
              </template>

              <template v-else-if="item.name === 'Shanghai Tower'">
                <div class="feature-card">
                  <div class="feature-icon">🌪️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Diseño Helicoidal</h4>
                    <p class="feature-text">
                      Torsión espiral reduce 24% la resistencia al viento
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🏢</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Estructura</h4>
                    <p class="feature-text">
                      128 pisos con arquitectura de eficiencia energética
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🥉</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Ranking 2025</h4>
                    <p class="feature-text">
                      Tercer edificio más alto del mundo con
                      {{ item.altura_m }}m
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🇨🇳</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Símbolo Nacional</h4>
                    <p class="feature-text">
                      Emblema de la modernización china y Shanghái financiera
                    </p>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="feature-card">
                  <div class="feature-icon">🏗️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Estructura</h4>
                    <p class="feature-text">
                      Rascacielos de gran altura con diseño contemporáneo
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">📐</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Diseño</h4>
                    <p class="feature-text">
                      Arquitectura moderna by {{ item.architect }}
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🌆</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Ubicación</h4>
                    <p class="feature-text">
                      Landmark icónico en {{ item.city }}
                    </p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">⏱️</div>
                  <div class="feature-content">
                    <h4 class="feature-title">Construcción</h4>
                    <p class="feature-text">Completado en {{ item.year }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<script setup>
const route = useRoute();
const data = await queryContent("buildings_json").only("items").findOne();
const item = data.items.find(
  (e) => String(e.num) === String(route.params.slug)
);

// Mapeo de ciudades del JSON a las URLs de archivos markdown
const cityMapping = {
  Dubái: "/cities-md/city_01",
  "Kuala Lumpur": "/cities-md/city_03",
  Shanghái: "/cities-md/city_02",
  "La Meca": "/cities-md/city_04",
  Shenzhen: "/cities-md/city_05",
  Seúl: "/cities-md/city_06",
  "Nueva York": "/cities-md/city_07",
  Cantón: "/cities-md/city_08",
  Tianjin: "/cities-md/city_09",
  Pekín: "/cities-md/city_10",
  Taipéi: "/cities-md/city_11",
};

// Mapeo de arquitectos del JSON a las URLs de archivos markdown
const architectMapping = {
  "Skidmore, Owings & Merrill": "/architects-md/arq_01",
  "Kohn Pedersen Fox": "/architects-md/arq_02",
  "Fender Katsalidis Architects": "/architects-md/arq_03",
  "Dar al-Handasah + SL Rasch": "/architects-md/arq_04",
  Gensler: "/architects-md/arq_05",
  "C.Y. Lee & Partners": "/architects-md/arq_06",
};

const cityUrl = cityMapping[item.city];
const architectUrl = architectMapping[item.architect];
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

.building-details {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
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

.info-value {
  color: var(--charcoal);
  font-weight: 500;
}

.city-link,
.architect-link {
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.city-link:hover,
.architect-link:hover {
  transform: translateX(2px);
}

.city-link .info-value,
.architect-link .info-value {
  color: var(--forest-green);
  font-weight: 600;
  transition: all 0.2s ease;
}

.city-link:hover .info-value,
.architect-link:hover .info-value {
  color: var(--sage-green);
  text-decoration: underline;
}

.city-icon,
.architect-icon {
  color: var(--stone-gray);
  opacity: 0.6;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.city-link:hover .city-icon,
.architect-link:hover .architect-icon {
  color: var(--sage-green);
  opacity: 1;
}

.building-description {
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

.description-content p {
  margin-bottom: var(--spacing-md);
}

.description-content p:last-child {
  margin-bottom: 0;
}

.description-content strong {
  color: var(--forest-green);
  font-weight: 600;
}

.building-features {
  margin-bottom: var(--spacing-2xl);
}

.features-title {
  color: var(--forest-green);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  position: relative;
}

.features-title::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--mint-green);
  border-radius: 2px;
}

.global-context {
  margin-bottom: var(--spacing-xl);
}

.context-card {
  background: linear-gradient(
    135deg,
    rgba(168, 216, 168, 0.1),
    rgba(135, 169, 107, 0.05)
  );
  border: 1px solid rgba(135, 169, 107, 0.15);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.context-title {
  color: var(--forest-green);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 0 var(--spacing-md) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.ranking-info {
  background: var(--off-white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--mint-green);
}

.ranking-details p {
  margin: var(--spacing-xs) 0;
  color: var(--charcoal);
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.ranking-details p strong {
  color: var(--forest-green);
  font-weight: 600;
}

.source-note {
  display: block;
  margin-top: var(--spacing-sm);
  color: var(--stone-gray);
  font-size: var(--font-size-xs);
  font-style: italic;
  text-align: right;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.feature-card {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-lg);
  background: var(--off-white);
  border: 1px solid rgba(135, 169, 107, 0.08);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(135, 169, 107, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(45, 80, 22, 0.06);
}

.feature-icon {
  font-size: 1.8rem;
  margin-right: var(--spacing-md);
  margin-top: var(--spacing-xs);
  min-width: 40px;
  text-align: center;
}

.feature-content {
  flex: 1;
}

.feature-title {
  color: var(--forest-green);
  font-size: var(--font-size-base);
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
}

.feature-text {
  color: var(--stone-gray);
  font-size: var(--font-size-sm);
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 767px) {
  .building-details {
    padding: 0;
  }

  .building-header {
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
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

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: var(--spacing-md);
  }
}
</style>
