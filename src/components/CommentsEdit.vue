<template>
  <div>
    <li>
      <router-link :to="{ name: 'profile', params: { user: data.user } }"
        ><img :src="data.user.profileImage" alt="Avatar" width="50" height="50"
      /></router-link>
      <div class="info2">
        <strong>
          <p class="secondaryText">{{ fullName }}</p>
          <span
            ><p class="tertiaryText">@{{ data.user.username }}</p></span
          ></strong
        >
        <p class="primaryText">{{ data.tweet }}</p>
        <ul>
          <div v-if="data.comments">
            <div v-for="(comment, index) in data.comments" :key="index">
              <li>
                <router-link
                  :to="{ name: 'profile', params: { user: data.user } }"
                  ><img
                    :src="data.user.profileImage"
                    alt="Avatar"
                    width="50"
                    height="50"
                /></router-link>
                <div class="info">
                  <strong
                    >{{ comment.user.name }}
                    <span>@{{ comment.user.username }}</span></strong
                  >
                  <div style="display: flex">
                    <p>{{ comment.comment }}</p>
                  </div>
                  <div class="actions" v-if="userCanEdit(comment.user.id)">
                    <a @click="openEditComment(comment)" href="#"
                      ><i
                        style="color: grey; font-size: 16px"
                        class="material-icons"
                        >edit</i
                      ></a
                    >
                    <a @click="deleteComment(comment)" href="#"
                      ><i
                        style="color: grey; font-size: 16px"
                        class="material-icons"
                        >delete</i
                      ></a
                    >
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </li>
    <textarea
      class="right"
      v-model="textForCreate"
      cols="50"
      placeholder="Add new comment"
    ></textarea>
    <button @click="createComment" :class="{ disabled: !textForCreate }">
      Reply
    </button>
    <modal-dialog v-if="openDialog" title="Edit comment">
      <textarea v-model="textForEdit" cols="50"></textarea>
      <div style="display: flex">
        <button
          :class="{ disabled: !textForEdit }"
          style="flex-grow: 1"
          @click="editComment"
        >
          Ok
        </button>
        <button style="flex-grow: 1" @click="openDialog = false">Close</button>
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import {
  initializeCommentForEdit,
  initializeCommentForCreate,
} from "../../server/models/model";
import ModalDialog from "./ModalDialog.vue";
export default {
  components: { ModalDialog },
  props: ["data"],
  data: () => {
    return {
      commentForEdit: null,
      openDialog: false,
      textForCreate: "",
      textForEdit: "",
      commentForEdit: null,
    };
  },
  computed: {
    fullName() {
      return this.data.user.name + " " + this.data.user.surname;
    },
  },
  methods: {
    initializeCommentForEdit,
    initializeCommentForCreate,
    createComment() {
      var comment = this.initializeCommentForCreate(
        this.$store.state.currentUser,
        this.data.id
      );
      comment.comment = this.textForCreate;
      this.$store.dispatch("createComment", comment);
      this.textForCreate = "";
    },
    openEditComment(comment) {
      this.openDialog = true;
      this.commentForEdit = this.initializeCommentForEdit(comment);
      this.textForEdit = comment.comment;
    },
    editComment() {
      this.commentForEdit.comment = this.textForEdit;
      this.openDialog = false;
      this.$store.dispatch("editComment", this.commentForEdit);
    },
    deleteComment(comment) {
      this.$store.dispatch("deleteComment", comment);
    },
    userCanEdit(id) {
      return id == this.$store.state.currentUser.id;
    },
  },
};
</script>