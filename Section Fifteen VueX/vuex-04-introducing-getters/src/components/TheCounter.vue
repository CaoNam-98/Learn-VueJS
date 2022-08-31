<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      // Gọi đến phương thức nằm bên trong getters
      return this.$store.getters.finalCounter;
    },
  },
};
</script>