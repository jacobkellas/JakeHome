import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    incrementCount(state) {
      state.count++
    },
    decrementCount(state) {
      state.count--
    },
  },
  actions: {
    incrementCount: ({ commit }) => commit('incrementCount'),
    decrementCount: ({ commit }) => commit('decrementCount'),
  },
  getters: {
    getCount: state => state.count,
  },
  modules: {},
})
