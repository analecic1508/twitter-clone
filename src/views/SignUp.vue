<template>
  <div class="content">
    <div class="main">
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
      <label class="required" for="lastName"><b>Last name</b></label>
      <input
        type="text"
        v-model="user.surname"
        placeholder="Enter Last Name"
        name="lastName"
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
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
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
    validatePassword() {
      var validPass = this.user.password.length > 7;
      if (!validPass)
        this.$store.state.errorMessages.push(
          "Password must have at least 8 characters"
        );
      return validPass;
    },
    checkAllFields() {
      this.$store.commit("removeAllErrorText");
      return (
        this.validateEmail() &&
        this.validatePassword() &&
        this.checkInput(this.user.username) &&
        this.checkInput(this.user.email) &&
        this.checkInput(this.user.name) &&
        this.checkInput(this.user.surname)
      );
    },
  },
  computed: {
    errorMessages() {
      return this.$store.state.errorMessages;
    },
  },
  beforeMount() {
    this.$store.commit("removeAllErrorText");
  },
};
</script>