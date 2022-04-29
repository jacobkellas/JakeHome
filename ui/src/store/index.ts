import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { UserInfo } from '@/models'

export interface State {
  count: number
  userInfo: UserInfo | null
  isAuthenticated: boolean
  isAdmin: boolean
  message: string
  darkMode: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    userInfo: null,
    isAuthenticated: false,
    isAdmin: false,
    message: 'Default Message',
    darkMode: false,
  },
  getters: {
    getCount: (state): number => state.count,
    getUserInfo: (state): UserInfo | null => state.userInfo,
    getIsAuthenticated: (state): boolean => state.isAuthenticated,
    getIsAdmin: (state): boolean => state.isAdmin,
    getMessage: (state): string => state.message,
    getDarkMode: (state): boolean => {
      const darkMode: string | null = localStorage.getItem(
        'jake_home_dark_mode'
      )

      return darkMode ? darkMode === 'true' : state.darkMode
    },
  },
  mutations: {
    incrementCount: (state): void => {
      state.count++
    },
    decrementCount(state): void {
      state.count--
    },
    setUserInfo(state, userInfo: UserInfo): void {
      if (userInfo.userRoles.includes('authenticated')) {
        state.isAuthenticated = true
      }
      if (userInfo.userRoles.includes('jakehomereader')) {
        state.isAdmin = true
      }
      state.userInfo = userInfo
    },
    setMessage(state, message: string): void {
      state.message = message
    },
    setDarkMode(state, darkMode: boolean): void {
      state.darkMode = darkMode
    },
  },
  actions: {
    incrementCount: ({ commit }): void => commit('incrementCount'),
    decrementCount: ({ commit }): void => commit('decrementCount'),
    updateUserInfo({ commit }, userInfo: UserInfo): void {
      commit('setUserInfo', userInfo)
    },
    setMessage: ({ commit }, message: string): void =>
      commit('setMessage', message),
    setDarkMode: ({ commit }, darkMode: boolean): void => {
      localStorage.setItem('jake_home_dark_mode', JSON.stringify(darkMode))
      commit('setDarkMode', darkMode)
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
