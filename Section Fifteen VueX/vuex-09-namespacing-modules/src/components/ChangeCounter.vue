<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    // Cách 1: Không sử dụng namespacing
    // ...mapActions({
    //   inc: 'increment',
    //   increase: 'increase'
    // })
    // Cách 2: Sử dụng namespacing
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>