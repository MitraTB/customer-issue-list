import { createStore } from "vuex";
import api from "../utils/api_instance";
import { issueList } from "../Api/endpoints";
const state = {
  issues: [],
};

const mutations = {
  SET_ISSUE: (state, payload) => {
    state.issues = payload;
  },
  ADD_ISSUE: (state, payload) => {
    [...state.issues, payload];
  },
  DELETE_ISSUE: (state, payload) => {
    state.issues = state.issues.filter((issue) => issue.id != payload);
  },
  EDIT_ISSUE: (state, payload) => {
    state.issues = state.issues.map((issue) => {
      if (issue.id === payload.id) {
        return payload;
      }
      return issue;
    });
  },
};

const actions = {
  getAllIssues: async ({ commit }) => {
    try {
      const result = await api.get(issueList);
      commit("SET_ISSUE", result.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  addIssue: async ({ commit }, payload) => {
    try {
      await api.post(issueList, payload);
      commit("ADD_ISSUE", payload);
      alert("Congradulation! done successfully");
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteIssue: async ({ commit }, payload) => {
    try {
      await api.delete(`${issueList}/${payload}`);
      commit("DELETE_ISSUE", payload);
    } catch (error) {
      throw new Error(error);
    }
  },
  editIssue: async ({ commit }, payload) => {
    try {
      await api.put(`${issueList}/${payload.id}`, payload);
      commit("EDIT_ISSUE", payload);
      alert("Congradulation! done successfully");
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default createStore({
  state,
  actions,
  mutations,
});
