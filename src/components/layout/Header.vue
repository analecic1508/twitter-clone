<template>
  <header id="main-header">
    <div class="content">
      <nav v-show="showHomeIcon">
        <ul>
          <li>
            <router-link to="/homePage">
              <img src="../../assets/home.svg" alt="Home" title="Home"
            /></router-link>
          </li>
        </ul>
      </nav>
      <img src="../../assets/logo.svg" alt="Logo Twitter" />
      <div class="side">
        <input
          type="text"
          v-model="searchText"
          placeholder="Search on Twitter"
        />
        <a href="#" @click="searchUsers"
          ><i style="color: grey; font-size: 24px" class="material-icons"
            >search</i
          ></a
        >
        <img
          @click="goToMyProfile"
          :src="currentUser.profileImage"
          title="my profile"
          alt=""
        />
        <button @click="openDialog = true">Tweet</button>
        <a @click="logout()" href="#"
          ><i
            style="color: #3bb9e3; font-size: 34px; padding-left: 10px"
            class="material-icons"
            >exit_to_app</i
          ></a
        >
      </div>
    </div>
    <modal-dialog v-if="openDialog" title="Create post">
      <textarea v-model="textForEdit" cols="50"></textarea>
      <div style="display: flex">
        <button
          style="flex-grow: 1"
          :class="{ disabled: !textForEdit }"
          @click="createPost"
        >
          Ok
        </button>
        <button style="flex-grow: 1" @click="openDialog = false">Close</button>
      </div>
    </modal-dialog>
  </header>
</template>

<script>
import ModalDialog from "../../components/ModalDialog";
import { initializePostForCreate } from "../../../server/models/model";
export default {
  data: () => {
    return {
      openDialog: false,
      textForEdit: "",
      searchText: "",
    };
  },
  components: {
    ModalDialog,
  },
  methods: {
    initializePostForCreate,
    goToMyProfile() {
      this.$store.commit("setProfileUser", this.currentUser);
      if (this.$route.name != "profile") {
        this.$router.push("profile");
      }
    },
    createPost() {
      var post = initializePostForCreate(this.$store.state.currentUser);
      post.tweet = this.textForEdit;
      this.$store.dispatch("createPost", post);
      this.textForEdit = "";
      this.openDialog = false;
    },
    searchUsers() {
      if (this.searchText) {
        this.$store.dispatch("searchUsers", this.searchText);
        if (this.$route.name != "users") this.$router.push("users");
      }
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    showHomeIcon() {
      return this.$route.name != "homePage";
    },
  },
};
</script>

