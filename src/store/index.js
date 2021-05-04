/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import { apiGetAllPosts, apiGetAllUserPosts, apiDeletePost, apiCreatePost, apiEditPost } from '../../server/requests/posts';
import { apiGetPostsComments, apiCreateComment, apiEditComment, apiDeleteComment } from '../../server/requests/comments';
import apiLogin from "../../server/requests/login";
import apiSignUp from "../../server/requests/signUp";
import router from '../router/router';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: null,
    profileUser: null,
    errorMessages: [],
    users: [],
    posts: [],
    comments: []
  },
  mutations: {
    setProfileUser(state, user) {
      state.profileUser = user;
    },
    setErrorText(state, text) {
      state.errorMessages.push(text);
    },
    removeAllErrorText(state) {
      state.errorMessages = [];
    },
    async login(state, data) {
      var responseData = await apiLogin(data);
      if (!responseData.length)
        state.errorMessages.push('Login faild, you need to signup first');
      else {
        state.currentUser = responseData[0];
        router.push('homePage');
      }
    },
    async signUp(state, data) {
      var responseData = await apiSignUp(data);
      if (!responseData)
        state.errorMessages.push('Sommething went wrong!');
      else {
        state.currentUser = responseData;
        router.push('homePage');
      }
    },
    async getPosts(state) {
      state.posts = await apiGetAllPosts();
    },
    async createPost(state, post) {
      var response = await apiCreatePost(post);
      if (!response)
        state.errorMessages.push('Sommething went wrong!');
      else
        state.posts.push(response);
    },
    async editPost(state, editPost) {
      var response = await apiEditPost(editPost);
      if (!response)
        state.errorMessages.push('Sommething went wrong!');
      else {
        var post = state.posts.find(f => f.id == editPost.id);
        post.tweet = response.tweet;
      }
    },
    async deletePost(state, id) {
      var response = await apiDeletePost(id);
      if (!response)
        state.errorMessages.push('Sommething went wrong!');
      else {
        var post = state.posts.find(f => f.id == id);
        state.posts.pop(post);
      }
    },
    async getComments(state, postId) {
      var comments = await apiGetPostsComments(postId);
      var post = state.posts.find(f => f.id == postId);
      post.comments = comments;
    },
    async getUserPosts(state) {
      state.posts = await apiGetAllUserPosts(state.profileUser.id);
    },
    async createComment(state, comment) {
      var response = await apiCreateComment(comment);
      if (!response)
        state.errorMessage = 'Sommething went wrong!';
      else {
        var post = state.posts.find(f => f.id == comment.post_id);
        post.comments.push(response);
      }
    },
    async editComment(state, comment) {
      var response = await apiEditComment(comment);
      if (!response)
        state.errorMessage = 'Sommething went wrong!';
      else {
        var post = state.posts.find(f => f.id == comment.post_id);
        var changedComment = post.comments.find(f => f.id == comment.id)
        changedComment.comment = response.comment;
      }
    },
    async deleteComment(state, comment) {
      var response = await apiDeleteComment(comment);
      if (!response)
        state.errorMessage = 'Sommething went wrong!';
      else {
        var post = state.posts.find(f => f.id == comment.post_id);
        var changedComment = post.comments.find(f => f.id == comment.id)
        post.comments.pop(changedComment);
      }
    }
  },
  actions: {
    getPosts(context) {
      context.commit('getPosts')
    },
    getUserPosts(context) {
      context.commit('getUserPosts')
    },
    createPost(context, post) {
      context.commit('createPost', post)
    },
    editPost(context, post) {
      context.commit('editPost', post)
    },
    deletePost(context, id) {
      context.commit('deletePost', id)
    },
    signUp(context, data) {
      context.commit('signUp', data)
    },
    login(context, data) {
      debugger;
      context.commit('login', data)
    },
    getComments(context, postId) {
      context.commit('getComments', postId)
    },
    createComment(context, comment) {
      context.commit('createComment', comment)
    },
    editComment(context, comment) {
      context.commit('editComment', comment)
    },
    deleteComment(context, comment) {
      context.commit('deleteComment', comment)
    }
  },
  modules: {
  }
})
export default store;
