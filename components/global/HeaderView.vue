<template>
  <div class="header-navigation">
    <NuxtLink class="nav-button primary" to="/">Home</NuxtLink>
    <NuxtLink class="nav-button primary" to="/buildings_index"
      >Edificios</NuxtLink
    >
    <NuxtLink class="nav-button primary" to="/cities_index">Ciudades</NuxtLink>
    <NuxtLink class="nav-button primary" to="/architects_index"
      >Arquitectos</NuxtLink
    >
    <NuxtLink class="nav-button secondary" to="/buildings_json"
      >Datos JSON</NuxtLink
    >
  </div>
</template>

<style scoped>
.header-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin: var(--spacing-lg) 0 var(--spacing-md) 0;
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid rgba(135, 169, 107, 0.1);
}

.nav-button {
  flex: 1;
  min-width: 120px;
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.nav-button.primary {
  background: var(--sage-green);
  color: white;
  border-color: var(--sage-green);
}

.nav-button.primary:hover {
  background: var(--forest-green);
  border-color: var(--forest-green);
  transform: translateY(-1px);
}

.nav-button.secondary {
  background: var(--off-white);
  color: var(--sage-green);
  border-color: rgba(135, 169, 107, 0.2);
}

.nav-button.secondary:hover {
  background: rgba(135, 169, 107, 0.05);
  border-color: var(--sage-green);
  color: var(--forest-green);
}

@media (max-width: 767px) {
  .header-navigation {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .nav-button {
    min-width: unset;
    flex: none;
  }
}
</style>
