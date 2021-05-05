<template>
  <div class="bar">
    <div class="content">
      <ul>
        <li class="active">
          <span>Tweets</span>
          <strong>{{ userPostsCount }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  computed: {
    userPostsCount() {
      return this.$store.state.posts.length;
    },
  },
};
</script>
