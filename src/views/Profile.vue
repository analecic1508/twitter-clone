/* eslint-disable prettier/prettier */
<template>
  <div>
    <Header />
    <div class="banner">
      <h1>Clone Layout Twitter</h1>
    </div>
    <Bar />
    <div class="wrapper-content content">
      <ProfileInfo />
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
import Bar from "../components/Bar.vue";
import ProfileInfo from "../components/ProfileInfo.vue";
export default {
  components: {
    Tweet,
    Header,
    Bar,
    ProfileInfo,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
