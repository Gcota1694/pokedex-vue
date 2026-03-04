<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const pokemon = ref(null);

const traducciones = {
  // Stats
  hp: 'Vida',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defensa Especial',
  speed: 'Velocidad',
  // Tipos
  fire: 'Fuego',
  water: 'Agua',
  grass: 'Planta',
  electric: 'Eléctrico',
  psychic: 'Psíquico',
  ice: 'Hielo',
  dragon: 'Dragón',
  dark: 'Siniestro',
  fairy: 'Hada',
  normal: 'Normal',
  fighting: 'Lucha',
  flying: 'Volador',
  poison: 'Veneno',
  ground: 'Tierra',
  rock: 'Roca',
  bug: 'Bicho',
  ghost: 'Fantasma',
  steel: 'Acero',
};

const traducir = (texto) => traducciones[texto] || texto;

const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    pokemon.value = data;
  } catch (error) {
    console.error(error);
  }
};

getData();
</script>

<template>
  <div class="container">
    <button @click="router.back()">← Volver</button>

    <div v-if="pokemon" class="detalle">
      <h1>{{ pokemon.name }}</h1>

      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
      />

      <h3>Tipos</h3>
      <p v-for="t in pokemon.types" :key="t.type.name">{{ traducir(t.type.name) }}</p>

      <h3>Estadísticas</h3>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.stat.name">
          {{ traducir(stat.stat.name) }}: {{ stat.base_stat }}
        </li>
      </ul>

      <h3>Habilidades</h3>
      <ul>
        <li v-for="ab in pokemon.abilities" :key="ab.ability.name">
          {{ traducir(ab.ability.name) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

button {
  margin-bottom: 20px;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
}

button:hover {
  background: #f0f0f0;
}

h1 {
  text-transform: capitalize;
}

img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  text-transform: capitalize;
  margin: 4px 0;
}
</style>