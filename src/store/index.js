/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    needsSignUp: false,
    currentUser: {
      email: '',
      password: '',
      username: '',
      id: 0,
      image: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
      status: 'happy'
    },
    users: [],
    posts: [{
      id: 0,
      text: 'post 1',
      user: {
        email: '',
        password: '',
        username: '',
        id: 0,
        image: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        status: 'happy'
      },
      coments: [
        {
          text: 'comment 1', user: {
            email: '',
            password: '',
            username: '',
            id: 0,
            image: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
          }
        }
      ]
    }
    ]
  },
  mutations: {
    goToSignUp(state) {
      state.needsSignUp = !state.needsSignUp;
    }
  },
  actions: {

  },
  modules: {
  }
})
export default store;
