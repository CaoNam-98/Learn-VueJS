<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storeResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <!-- Dùng keep-alive để giữ giá trị của form khi di chuyển button -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storeResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The offical Vue.JS documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google.',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResource,
      deleteResouce: this.removeResource
    };
  },
  computed: {
    // use computed to watch change selectedTab value
    storeResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url,
      };
      this.storeResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storeResources.findIndex((res) => res.id === resId);
      this.storeResources.splice(resIndex, 1);
    },
  },
};
</script>
