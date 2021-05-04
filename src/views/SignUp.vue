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
      <label class="required" for="name"><b>Name</b></label>
      <input
        type="text"
        v-model="user.name"
        placeholder="Enter Name"
        name="name"
      />
      <label class="required" for="uname"><b>Username</b></label>
      <input
        type="text"
        v-model="user.username"
        placeholder="Enter Username"
        name="uname"
      />
      <label class="required" for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="user.password"
        placeholder="Enter Password"
        name="psw"
        maxlength="50"
      />
      <label class="required" for="email"><b>Email</b></label>
      <input
        type="text"
        v-model="user.email"
        placeholder="Enter Email"
        name="email"
        maxlength="50"
      />
      <label for="email"><b>Profile description</b></label>
      <input
        type="text"
        v-model="user.status"
        placeholder="Enter Status"
        name="status"
        maxlength="50"
      />
      <div class="parent">
        <button class="child" @click="signUp">Sign up</button>
        <button class="child" @click="goToLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeUser } from "../../server/models/model";
import ErrorText from "../components/ErrorText.vue";
export default {
  data: () => {
    return {
      user: initializeUser(),
      checkFields: false,
    };
  },
  components: { ErrorText },
  methods: {
    initializeUser,
    signUp() {
      if (this.checkAllFields()) {
        this.user.profileImage =
          "https://avatars.githubusercontent.com/u/41083127?v=4";
        this.$store.dispatch("signUp", this.user);
      } else
        this.$store.state.errorMessages.push(
          "Please fill all requiered fields"
        );
    },
    goToLogin() {
      this.$router.push("/");
    },
    checkInput(value) {
      return value != "";
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var emailValid = re.test(String(this.user.email).toLowerCase());
      if (!emailValid)
        this.$store.state.errorMessages.push(
          "Please enter a valid email address"
        );
      return emailValid;
    },
    checkAllFields() {
      this.$store.commit("removeAllErrorText");
      return (
        this.validateEmail() &&
        this.checkInput(this.user.password) &&
        this.checkInput(this.user.username) &&
        this.checkInput(this.user.email) &&
        this.checkInput(this.user.name)
      );
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
  width: 50%;
  padding: 16px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
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
.parent {
  display: flex; /* displays flex-items (children) inline */
}
.child {
  flex-grow: 1; /* each flex-item grows and takes 1/3 of the parent's width */
  text-align: center;
  border: 1px solid;
}
</style>