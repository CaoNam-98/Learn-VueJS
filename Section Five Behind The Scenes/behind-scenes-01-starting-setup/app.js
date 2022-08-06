const app = Vue.createApp({
  data() {
    console.log('huhu 123');
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      console.log('run 1');
      this.currentUserInput = event.target.value;
    },
    setText() {
      console.log('run 2');
      // this.message = this.currentUserInput;
      // Get input value, via ref
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

setTimeout(function() {
  app.unmount();
}, 3000)


