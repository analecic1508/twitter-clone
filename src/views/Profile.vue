/* eslint-disable prettier/prettier */
<template>
  <div>
    <Header :data="user" />
    <div class="banner">
      <h1>Clone Layout Twitter</h1>
    </div>
    <Bar :data="user" />
    <div class="wrapper-content content">
      <ProfileInfo :data="user" />
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
    user() {
      return this.$store.state.profileUser;
    },
  },
  beforeMount() {
    this.$store.commit("removeAllErrorText");
    if (this.$route.params.user)
      this.$store.commit("setProfileUser", this.$route.params.user);
    this.$store.dispatch("getUserPosts");
  },
};
</script>
