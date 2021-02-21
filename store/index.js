export const state = () => ({
  showTableChanceModal: false,
  showGachaResult: false,
})

export const getters = {
  showTableChanceModal(state) {
    return state.showTableChanceModal
  },
  showGachaResult(state) {
    return state.showGachaResult
  },
}

export const mutations = {
  toggleShowTableChanceModal(state) {
    state.showTableChanceModal = !state.showTableChanceModal
  },
  toggleShowGachaResult(state) {
    state.showGachaResult = !state.showGachaResult
  },
}
