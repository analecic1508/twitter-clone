
<template>
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input
      type="text"
      v-model="user.username"
      placeholder="Enter Username"
      name="uname"
      required
    />

    <label for="email"><b>Email</b></label>
    <input
      type="text"
      v-model="user.email"
      placeholder="Enter Email"
      name="email"
      required
    />

    <label for="psw"><b>Password</b></label>
    <input
      type="password"
      v-model="user.password"
      placeholder="Enter Password"
      name="psw"
      required
    />

    <button type="submit" @click="signUp">Sign up</button>
    <button type="submit" @click="logIn">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    signUp() {
      this.$router.push({ name: "posts" });
    },
    logIn() {
      this.$store.commit("goTosignUp");
    },
  },
  computed: {
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
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa:hover {
  opacity: 0.7;
}
</style>