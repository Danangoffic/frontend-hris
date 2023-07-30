export const state = () => ({
  name: '',
  email: '',
  gender: '',
  age: '',
  phone: '',
  team_id: '',
  role_id: '',
})

export const getters = {
  getName(state) {
    return state.name
  },
  getEmail(state) {
    return state.email
  },
  getGender(state) {
    return state.gender
  },
  getAge(state) {
    return state.age
  },
}

export const mutations = {
  updateName(state, payload) {
    state.name = payload
  },
  updateEmail(state, payload) {
    state.email = payload
  },
  updateGender(state, payload) {
    state.gender = payload
  },
  updateAge(state, payload) {
    state.age = payload
  },
  updatePhone(state, payload) {
    state.phone = payload
  },
  updateTeamId(state, payload) {
    state.team_id = payload
  },
  updateRoleId(state, payload) {
    state.role_id = payload
  },
}

// make setter

export const actions = {
  updateName({ commit }, name) {
    commit('updateName', name)
  },
  updateEmail({ commit }, email) {
    commit('updateEmail', email)
  },
  updateGender({ commit }, gender) {
    commit('updateGender', gender)
  },
  updateAge({ commit }, age) {
    commit('updateAge', age)
  },
}
