<template>
  <div class="card-list">
    <div v-for="character in characters" :key="character.id" class="card">
      <img :src="character.image" :alt="character.name" />
      <div class="card-body">
        <h5 class="card-title">{{ character.name }}</h5>
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacters } from '@/services/apiService';

export default {
  data() {
    return {
      characters: [],
      page: 1,
      info: {},
    };
  },
  created() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      try {
        const response = await getCharacters(this.page);
        this.characters = response.data.results;
        this.info = response.data.info;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
  },
};
</script>
