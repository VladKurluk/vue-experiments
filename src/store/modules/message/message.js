import * as types from "./messageTypes";

export default {
  namespaced: true,
  state: {
    msgFromVuex: "This message from vuex",
  },
  getters: {
    [types.GET_MESSAGE]: (state) => state.msgFromVuex,
  },
  mutations: {},
  actions: {},
};
