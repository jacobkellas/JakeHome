import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { UserInfo } from '@/models/UserInfo'

export interface State {
  userInfo: UserInfo | null
  isAuthenticated: boolean
  isAdmin: boolean
  darkMode: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    userInfo: null,
    isAuthenticated: false,
    isAdmin: false,
    darkMode: false,
  },
  getters: {
    getUserInfo: (state): UserInfo | null => state.userInfo,
    getIsAuthenticated: (state): boolean => state.isAuthenticated,
    getIsAdmin: (state): boolean => state.isAdmin,
    getDarkMode: (state): boolean => {
      const darkMode: string | null = localStorage.getItem(
        'jake_home_dark_mode'
      )

      return darkMode ? darkMode === 'true' : state.darkMode
    },
  },
  mutations: {
    setUserInfo(state, userInfo: UserInfo): void {
      if (userInfo.userRoles.includes('authenticated')) {
        state.isAuthenticated = true
      }
      if (userInfo.userRoles.includes('jakehomereader')) {
        state.isAdmin = true
      }
      state.userInfo = userInfo
    },
    setDarkMode(state, darkMode: boolean): void {
      state.darkMode = darkMode
    },
  },
  actions: {
    updateUserInfo({ commit }, userInfo: UserInfo): void {
      commit('setUserInfo', userInfo)
    },
    setDarkMode: ({ commit }, darkMode: boolean): void => {
      localStorage.setItem('jake_home_dark_mode', JSON.stringify(darkMode))
      commit('setDarkMode', darkMode)
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
