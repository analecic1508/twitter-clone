/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: null,
    profileUser: null,
    authenticated: false,
    errorMessages: [],
    users: [],
    posts: [],
    comments: []
  },
  mutations,
  actions
})
export default store;
