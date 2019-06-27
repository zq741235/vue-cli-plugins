const debug = process.env.NODE_ENV !== 'production'

export default {
  strict: debug,
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  modules: {}
}
