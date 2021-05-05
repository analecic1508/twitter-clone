/* eslint-disable prettier/prettier */
<template>
  <div>
    <Header />
    <div class="wrapper-content content">
      <section class="timeline">
        <nav>
          <a class="active" href="">Users</a>
        </nav>
        <ul class="tweets">
          <user :data="user" v-for="user in users" :key="user.id" />
          <div style="height: 300px" v-if="!users.length">
            <p>No users found!</p>
          </div>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Header from "../components/layout/Header.vue";
import User from "../components/User";
export default {
  components: {
    Header: Header,
    User: User,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  beforeMount() {
    this.$store.commit("removeAllErrorText");
  },
};
</script>
