<template>
  <div class="location-list">
    <div class="header">
      <h2>Locations</h2>
    </div>
    <ul class="location-items">
      <li v-for="location in locations" :key="location.id" class="location-item">
        <h3>{{ location.name }}</h3>
        <p>Type: {{ location.type }}</p>
        <p>Dimension: {{ location.dimension }}</p>
        <p>Residents: {{ location.residents.length }}</p>
      </li>
    </ul>
    <div class="pagination">
      <button @click="handlePrevPage" :disabled="!info.prev" class="page-btn">Previous</button>
      <button @click="handleNextPage" :disabled="!info.next" class="page-btn">Next</button>
    </div>
  </div>
</template>

<script>
import { getLocations } from '@/services/apiService';

export default {
  data() {
    return {
      locations: [],
      page: 1,
      info: {},
    };
  },
  created() {
    this.fetchLocations();
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await getLocations(this.page);
        this.locations = response.data.results;
        this.info = response.data.info;
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    },
    handlePrevPage() {
      if (this.info.prev) {
        this.page--;
        this.fetchLocations();
      }
    },
    handleNextPage() {
      if (this.info.next) {
        this.page++;
        this.fetchLocations();
      }
    },
  },
};
</script>
