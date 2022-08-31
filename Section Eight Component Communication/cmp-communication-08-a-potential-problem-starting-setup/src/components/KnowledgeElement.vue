<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- Khi click vào button này sẽ thực thi gọi hàm selectTopic trong provide của App() do mình có Inject-->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>