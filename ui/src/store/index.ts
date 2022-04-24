import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { UserInfo } from '@/models'

export interface State {
  count: number
  userInfo: UserInfo | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    userInfo: null,
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
    getCount: (state) => state.count,
  },
})

export function useStore() {
  return baseUseStore(key)
}

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     count: 0,
//     userInfo: null,
//   },
//   mutations: {
//     incrementCount(state) {
//       state.count++
//     },
//     decrementCount(state) {
//       state.count--
//     },
//   },
//   actions: {
//     incrementCount: ({ commit }) => commit('incrementCount'),
//     decrementCount: ({ commit }) => commit('decrementCount'),
//   },
//   getters: {
//     getCount: (state) => state.count,
//   },
//   modules: {},
// })
