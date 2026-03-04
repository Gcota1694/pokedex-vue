<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const pokemon = ref([]);
const porPagina = 10;
const route = useRoute();
const router = useRouter();

// Lee la página desde la URL, si no hay ninguna usa 1
const paginaActual = computed(() => Number(route.query.page) || 1);

const getData = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=251');
    pokemon.value = data.results;
  } catch (error) {
    console.error(error);
  }
};

getData();

const pokemonPagina = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina;
  const fin = inicio + porPagina;
  return pokemon.value.slice(inicio, fin);
});

const totalPaginas = computed(() => {
  return Math.ceil(pokemon.value.length / porPagina);
});

const irAPagina = (num) => {
  router.push({ query: { page: num } });
};
</script>

<template>
  <div class="container">
    <h1>Pokédex</h1>

    <div class="grid">
      <RouterLink
        v-for="poke in pokemonPagina"
        :key="poke.name"
        :to="`/pokemon/${poke.name}`"
        class="card"
      >
        <img
          :src="`https://img.pokemondb.net/artwork/${poke.name}.jpg`"
          :alt="poke.name"
        />
        <p>{{ poke.name }}</p>
      </RouterLink>
    </div>

    <div class="paginacion">
      <button @click="irAPagina(paginaActual - 1)" :disabled="paginaActual === 1">← Anterior</button>
      <span>Página {{ paginaActual }} de {{ totalPaginas }}</span>
      <button @click="irAPagina(paginaActual + 1)" :disabled="paginaActual === totalPaginas">Siguiente →</button>
    </div>

  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card {
  text-decoration: none;
  color: black;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 130px;
  text-align: center;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
  border-color: #888;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.card p {
  margin: 6px 0 0;
  text-transform: capitalize;
  font-weight: bold;
}

.paginacion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.paginacion button {
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
}

.paginacion button:hover:not(:disabled) {
  background: #f0f0f0;
}

.paginacion button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>