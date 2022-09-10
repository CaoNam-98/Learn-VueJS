<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // Cách 1: Sử dụng namespacing
    ...mapGetters('numbers', ['finalCounter'])
    // Cách 2: Không sử dụng namespacing
    // ...mapGetters(['finalCounter'])
  },
};
</script>