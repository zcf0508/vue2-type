import { state as rootState } from '@/store'

export const state = {
  name: 'huali',
  age: 18,
}

export const mutations = {
  /** @type {import('@/store/helper').BaseMutation<typeof state, string, void>} */
  SET_NAME(state, payload) {
    state.name = payload
  },
  /** @type {import('@/store/helper').BaseMutation<typeof state, number, void>} */
  SET_AGE(state, payload) {
    state.age = payload
  }
}

export const actions = {
  /** @type {import('@/store/helper').BaseAction<typeof state, typeof mutations, {name: string, age:number}, void>} */
  updateUser({ commit }, payload) {
    commit('SET_NAME', payload.name)
    commit('SET_AGE', payload.age)
  }
}

/** @type {import('vuex').Module<typeof state, typeof rootState>} */
const userStore = {
  state,
  mutations,
  actions,
}

export default userStore
