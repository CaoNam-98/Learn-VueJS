const app = Vue.createApp({
  data() {
    return {
      deatilsAreVisiable: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "012345678991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09867 543221",
          email: "julie@localhost.com",
        },
      ],
    };
  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ deatilsAreVisiable ? 'Hide' : 'Show'}} Details
      </button>
      <ul v-if="deatilsAreVisiable">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      deatilsAreVisiable: true,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "012345678991",
        email: "manuel@localhost.com",
      }
    }
  },
  methods: {
    toggleDetails() {
      this.deatilsAreVisiable = !this.deatilsAreVisiable;
    }
  }
});

app.mount('#app');
