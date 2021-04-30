<template>
  <div class="content">
    <nav class="navbar navbar-expand-lg navbar-info bg-info">
      <img src="../assets/logo.svg" alt="Logo Twitter" />
    </nav>
    <div class="container" v-if="!needsSignUp">
      <label for="uname"><b>Username</b></label>
      <input
        type="text"
        v-model="user.username"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw"><b>Password1</b></label>
      <input
        type="password"
        v-model="user.password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click="signIn">Login</button>
      <button @click="goToSignUp">Sign Up</button>
    </div>
    <SignUp v-else />
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";

export default {
  components: {
    SignUp: SignUp,
  },
  methods: {
    signIn() {
      //  if(this.$store.users.any(f => f.username == this.username && f.password == this.password))
      this.$router.push({ name: "profile" });
    },
    goToSignUp() {
      this.$store.commit("goToSignUp");
    },
  },
  computed: {
    needsSignUp() {
      return this.$store.state.needsSignUp;
    },
    user() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #1183a0;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>
