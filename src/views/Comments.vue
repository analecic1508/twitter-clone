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
          <TweetWithComments :data="post" :key="post.id" />
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import TweetWithComments from "../components/TweetWithComments.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    TweetWithComments: TweetWithComments,
    Header: Header,
  },
  computed: {
    post() {
      return this.$route.params.post;
    },
  },
  beforeMount() {
    this.$store.commit("removeAllErrorText");
    this.$store.dispatch("getComments", this.$route.params.post.id);
  },
};
</script>
