<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  async asyncData({ params, $http }) {
    const post = await $http.$get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post };
  },
  data() {
    return {
      post: {},
    };
  },
};
</script>
