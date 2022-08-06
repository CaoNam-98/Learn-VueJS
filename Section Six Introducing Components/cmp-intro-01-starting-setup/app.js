const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234567891",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julis Jones",
          phone: "034573953",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app')