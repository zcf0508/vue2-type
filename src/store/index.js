import Vuex from 'vuex'
import Vue from 'vue'
import {
  mapMutations as _mapMutations,
  mapActions as _mapActions,
  mapGetters as _mapGetters,
} from 'vuex'
import userStore, {
  state as userState
} from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export const state = {
  user: userState,
}

/** @type {import('vuex').Store<typeof state>} */
const store = new Vuex.Store({
  modules: {
    user: userStore
  },
  getters,
})

export default store

/** @returns {import('./helper').MyStore} */
export const useStore = () => store;

/**
 * @template {import('./helper').AllMutationsKeys} T
 * 
 * @param  {...T[]} map 
 * @returns {import('./helper').MapMutationsFun<T>}
 */
export function mapMutations(map) {
  // @ts-ignore
  return _mapMutations(map);
}

/**
 * @template {import('./helper').AllActionsKeys} T
 * 
 * @param  {...T[]} map 
 * @returns {import('./helper').MapActionFun<T>}
 */
export function mapActions(map) {
  // @ts-ignore
  return _mapActions(map);
}

/**
 * @template {import('./helper').AllGettersKeys} T
 * 
 * @param  {...T[]} map 
 * @returns {import('./helper').MapGetterFun<T>}
 */
export function mapGetters(map) {
  // @ts-ignore
  return _mapGetters(map);
}
