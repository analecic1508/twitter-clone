<template>
  <div>
    <li>
      <router-link :to="{ name: 'profile', params: { user: data.user } }"
        ><img :src="data.user.profileImage" alt="Avatar" width="50" height="50"
      /></router-link>
      <div class="info">
        <strong
          >{{ fullName }} <span>{{ data.user.username }}</span></strong
        >
        <div style="display: flex">
          <p>{{ data.tweet }}</p>
          <div v-if="userCanChange()">
            <a href="#" @click="openEditPost()"><b> edit/</b></a
            ><a href="#" @click="deletePost()"><b> delete</b></a>
          </div>
        </div>
        <div class="actions">
          <router-link :to="{ name: 'comments', params: { post: data } }">
            <img src="../assets/comments.svg" alt="Comments" />
            {{ data.commentsCount }}
          </router-link>
          <a href="#"><img src="../assets/retweet.svg" alt="Retweet" />3434 </a>
          <a href="#"
            ><img src="../assets/like.svg" alt="Like" />
            {{ data.likesCount }}</a
          >
        </div>
      </div>
    </li>
    <modal-dialog v-if="openDialog" title="Edit post">
      <textarea v-model="textForEdit" cols="50"></textarea>
      <div style="display: flex">
        <button
          style="flex-grow: 1"
          :class="{ disabled: !textForEdit }"
          @click="editPost"
        >
          Ok
        </button>
        <button style="flex-grow: 1" @click="openDialog = false">Close</button>
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import { initializePostForEdit } from "../../server/models/model";
import ModalDialog from "./ModalDialog.vue";
export default {
  props: ["data"],
  data: () => {
    return {
      textForEdit: "",
      openDialog: false,
    };
  },
  components: { ModalDialog },
  computed: {
    fullName() {
      return this.data.user.name + " " + this.data.user.surname;
    },
  },
  methods: {
    initializePostForEdit,
    openEditPost() {
      this.textForEdit = this.data.tweet;
      this.openDialog = true;
    },
    editPost() {
      var postForEdit = initializePostForEdit(this.data);
      postForEdit.tweet = this.textForEdit;
      this.$store.dispatch("editPost", postForEdit);
      this.openDialog = false;
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.data.id);
    },
    userCanChange() {
      return this.data.user.id == this.$store.state.currentUser.id;
    },
  },
};
</script>
