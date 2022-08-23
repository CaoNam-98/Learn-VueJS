<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!result || results.length === 0)">No stored experiences found. Start adding some survey results first.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false
    }
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      const res = await axios.get('https://vue-http-demo-b9ea6-default-rtdb.firebaseio.com/surveys.json')
      this.isLoading = false;
      const results = [];
      for (const item in  res.data) {
        for(const id in res.data[item]) {
          results.push({
            id: res.data[item][id],
            name: res.data[item].name,
            rating: res.data[item].rating
          })
          break;
        }
      }
      this.results = results;
    },
  },
  // Lifecycle mounted sẽ được gọi sau khi component được render ra DOM => reaload là sẽ hiện data luôn
  mounted() {
    console.log('run lifecycle');
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>