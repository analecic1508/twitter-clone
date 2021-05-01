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
import Header from "../components/Header.vue";
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
};
</script>
