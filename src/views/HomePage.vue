/* eslint-disable prettier/prettier */
<template>
  <div>
    <Header />
    <div class="wrapper-content content">
      <section class="timeline">
        <nav>
          <a class="active" href="">Tweets</a>
        </nav>
        <ul class="tweets">
          <Tweet :data="post" v-for="post in posts" :key="post.id" />
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Tweet from "../components/Tweet.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: {
    Tweet: Tweet,
    Header: Header,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  beforeMount() {
    this.$store.commit("removeAllErrorText");
    this.$store.dispatch("getPosts");
  },
};
</script>
