<template>
  <div>
    <li>
      <router-link :to="{ name: 'profile', params: { user: data.user } }"
        ><img :src="data.user.profileImage" alt="Avatar" width="50" height="50"
      /></router-link>
      <div class="info">
        <strong
          >{{ fullName }} <span>@{{ data.user.username }}</span></strong
        >
        <div style="display: flex">
          <p>{{ data.tweet }}</p>
        </div>
        <div class="actions">
          <router-link :to="{ name: 'comments', params: { post: data } }">
            <img src="../assets/comments.svg" alt="Comments" />
            {{ data.commentsCount }}
          </router-link>
          <a v-if="userCanChange()" @click="openEditPost()" href="#"
            ><i style="color: grey; font-size: 16px" class="material-icons"
              >edit</i
            ></a
          >
          <a v-if="userCanChange()" @click="deletePost()" href="#"
            ><i style="color: grey; font-size: 16px" class="material-icons"
              >delete</i
            ></a
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
