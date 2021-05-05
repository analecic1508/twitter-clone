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
          <CommentsEdit :data="post" :key="post.id" />
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import CommentsEdit from "../components/CommentsEdit.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: {
    CommentsEdit: CommentsEdit,
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
