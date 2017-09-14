import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import service from './api/service'

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  all: [],
};

// getters are functions
const getters = {
  allBooks: state => state.all
}

// actions
const actions = {
   getAllBooks ({ commit }) {
      service.getBooks(books => {
        commit(types.RECEIVE_BOOKS, { books })
      })
    }
}

// mutations
const mutations = {
    [types.RECEIVE_BOOKS] (state, { books }) {
      state.all = books
    }
}
  
// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
