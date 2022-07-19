export const state = () => ({
    user: null,
    users: [],
    client: {},
    deposits: [],
    withdrawals: [],
    credits: [],
    bonuses: [],
    fees: [],
    internalTransfers: [],
    clientNotifications: [],
    clientTransactions: []
  });

export const mutations = {
    STORE_USER(state, user) {
      state.user = user
    },
    STORE_USERS(state, users) {
      state.users = users
    },
    STORE_CLIENT(state, client) {
      state.client = client
    },
    STORE_NOTIFICATIONS(state, notifications) {
      state.clientNotifications = [...notifications]
    },
    STORE_ARRAYITEM(state, { itemlabel, items }) {
      state[`${itemlabel}`] = [...items];
    }
  }

export const actions = {
    storeUser({commit}, user) {
      commit('STORE_USER', user)
    },
    storeUsers({commit}, users) {
      commit('STORE_USERS', users)
    },
    storeClient({commit}, client) {
      commit('STORE_CLIENT', client)
    },
    storeNotifications({commit}, notifications) {
      commit('STORE_NOTIFICATIONS', notifications)
    },
    storeArrayItem({commit}, data) {
      commit('STORE_ARRAYITEM', data)
    }
}

export const getters = {
    user(state) {
      return state.user
    },
    users(state) {
      return state.users
    },
    client(state) {
      return state.client
    },
    deposits(state) {
      return state.deposits
    },
    withdrawals(state) {
      return state.withdrawals
    },
    credits(state) {
      return state.credits
    },
    bonuses(state) {
      return state.bonuses
    },
    fees(state) {
      return state.fees
    },
    internalTransfers(state) {
      return state.internalTransfers
    },
    clientNotifications(state) {
      return state.clientNotifications
    },
}