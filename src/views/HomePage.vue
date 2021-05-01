/* eslint-disable prettier/prettier */
<template>
  <div>
    <header id="main-header">
      <div class="content">
        <img src="../assets/logo.svg" alt="Logo Twitter" />
        <div class="side">
          <input type="text" placeholder="Search on Twitter" />
          <img src="../assets/avatar.png" alt="" />
          <button>Tweet</button>
        </div>
      </div>
    </header>
    <div class="wrapper-content content">
      <section class="timeline">
        <nav>
          <a class="active" href="">Tweets</a>
        </nav>

        <ul class="tweets">
          <Tweet />
          <Tweet />
          <Tweet />
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Tweet from "../components/Tweet.vue";
export default {
  components: {
    Tweet: Tweet,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
