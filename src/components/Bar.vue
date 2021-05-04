<template>
  <div class="bar">
    <div class="content">
      <ul>
        <li class="active">
          <span>Tweets</span>
          <strong>1234</strong>
        </li>
        <li>
          <span>Following</span>
          <strong>5678</strong>
        </li>
        <li>
          <span>Followers</span>
          <strong>9012</strong>
        </li>
        <li>
          <span>Favorites</span>
          <strong>256</strong>
        </li>
      </ul>

      <div class="actions">
        <button>Follow</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  computed: {
    userPostsCount() {
      return this.$store.state.posts.filter(
        (f) => f.user.id == this.data.currentUser.id
      );
    },
  },
};
</script>
