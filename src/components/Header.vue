<template>
  <header id="main-header">
    <div class="content">
      <nav v-show="showHomeIcon">
        <ul>
          <li>
            <router-link to="/homePage">
              <img src="../assets/home.svg" alt="Home" title="Home"
            /></router-link>
          </li>
        </ul>
      </nav>
      <img src="../assets/logo.svg" alt="Logo Twitter" />
      <div class="side">
        <input type="text" placeholder="Search on Twitter" />
        <img
          @click="goToMyProfile"
          :src="currentUser.profileImage"
          title="my profile"
          alt=""
        />
        <button @click="openDialog = true">Tweet</button>
      </div>
    </div>
    <modal-dialog v-if="openDialog" title="Edit post">
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
import ModalDialog from "./ModalDialog.vue";
import { initializePostForCreate } from "../../server/models/model";
export default {
  data: () => {
    return {
      openDialog: false,
      textForEdit: "",
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

