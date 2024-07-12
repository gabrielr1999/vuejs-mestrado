<template>
  <div class="app-container">
      <AppHeader />
      <CharacterList />
      <LocationList />
      <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';
import LocationList from './components/LocationList.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    CharacterList,
    LocationList,
    AppFooter,
  },
};
</script>
