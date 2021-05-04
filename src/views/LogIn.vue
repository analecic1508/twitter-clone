<template>
  <div class="content">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-info bg-info">
        <img src="../assets/logo.svg" alt="Logo Twitter" />
      </nav>
      <error-text
        v-show="errorMessages.length"
        v-for="(errorText, index) in errorMessages"
        :key="index"
        :text="errorText"
      ></error-text>
      <label class="required" for="uname"><b>Username</b></label>
      <input
        type="text"
        v-model="user.username"
        placeholder="Enter Username"
        name="uname"
        class="required"
      />
      <label class="required" for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="user.password"
        placeholder="Enter Password"
        name="psw"
      />
      <div class="parent">
        <button class="child" @click="login">Login</button>
        <button class="child" @click="goToSignUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeUser } from "../../server/models/model";
import ErrorText from "../components/ErrorText.vue";

export default {
  components: { ErrorText },
  data: () => {
    return {
      user: initializeUser(),
    };
  },
  methods: {
    initializeUser,
    login() {
      if (this.validateFields()) {
        this.$store.dispatch("login", this.user);
      }
    },
    goToSignUp() {
      this.$router.push("signUp");
    },
    validateFields() {
      this.$store.commit("removeAllErrorText");
      if (this.user.username == "" || this.user.password == "") {
        this.$store.state.errorMessages.push(
          "Please enter username and password"
        );
        return false;
      }
      return true;
    },
  },
  computed: {
    errorMessages() {
      return this.$store.state.errorMessages;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
  width: 50%;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
.parent {
  display: flex; /* displays flex-items (children) inline */
}
.child {
  flex-grow: 1; /* each flex-item grows and takes 1/3 of the parent's width */
  text-align: center;
  border: 1px solid;
}
</style>
