<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  // state là global dùng chung nên ở component nào cũng có thể gọi đến
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>