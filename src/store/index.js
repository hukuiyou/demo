import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import service from './api/service'

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  all: [],
  rowBooks: [],
  userId: '',
  bookDetail: {},
  comments: {'1': {text:'good', by: 'David'},
            '2': {text:'amazing', by: 'Tom'}},
  authors: [],
  authorDetail: {}
  //selectedTab: 'repo'
};

// getters are functions
const getters = {
  allBooks: state => state.all,
  rowBooks: state => state.rowBooks
}

// actions
const actions = {
   getAllBooks ({ commit }) {
      service.getBooks(books => {
        commit(types.RECEIVE_BOOKS, { books })
      })
    },

    login ({commit}) {
      return new Promise((resolve, reject) => {
        service.login(() => {
          commit(types.LOGIN);
          resolve();
        })
      })
    },

    getBookDetail ({commit}, oParam) {
      let bookId = oParam.bookId;
      return new Promise((resolve, reject) => {
        service.getBookDetail(bookId, oBookDetail => {
          commit(types.RECEIVE_BOOK_DETAIL, {oBookDetail});
          resolve(oBookDetail);
        })
      })
    },

    getAuthors ({commit}) {
      service.getAuthors(authors => {
        commit(types.RECEIVE_AUTHORS, { authors })
      })
    },

    getAuthorDetail({commit}, oParam) {
      let authorId = oParam.authorId;
      return new Promise((resolve, reject) => {
        service.getAuthorDetail(authorId, oAuthorDetail => {
          commit(types.RECEIVE_AUTHOR_DETAIL, {oAuthorDetail});
          resolve(oAuthorDetail);
        })
      })
    },

    resetAuthorDetail({commit}) {
      commit(types.RESET_AUTHOR_DETAIL);
    },

    resetBookDetail({commit}) {
      commit(types.RESET_BOOK_DETAIL);
    }
}

// mutations
const mutations = {
    [types.RECEIVE_BOOKS] (state, { books }) {
      state.all = books;
      let iLength = books.length;
      state.rowBooks = [];
      for (var i=0; i<iLength; i++){
        let col = Math.floor(i/3);
        if (!state.rowBooks[col]){
          state.rowBooks[col] = [];
        }
        state.rowBooks[col].push(books[i]);
      }
    },

    [types.LOGIN] (state) {
        //alert("login");
        state.userId = '1';
        //state.selectedTab = 'mine';
    },

    [types.RECEIVE_BOOK_DETAIL] (state, {oBookDetail}) {
      state.bookDetail = oBookDetail;
    },

    [types.RECEIVE_AUTHORS] (state, {authors}) {
      state.authors = authors;
    },

    [types.RECEIVE_AUTHOR_DETAIL] (state, {oAuthorDetail}) {
      state.authorDetail = oAuthorDetail;
    },

    [types.RESET_AUTHOR_DETAIL] (state) {
      state.authorDetail = {};
    },

    [types.RESET_BOOK_DETAIL] (state) {
      state.bookDetail = {};
    },
}
  
// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
