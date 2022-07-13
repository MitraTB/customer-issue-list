import { createStore } from "vuex";
import axios from "axios";
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
        issue = payload;
      }
    });
  },
};

const actions = {
  getAllIssues: async ({ commit }) => {
    try {
      const result = await axios.get(issueList);
      commit("SET_ISSUE", result.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  addIssue: async ({ commit }, payload) => {
    await axios.post(issueList, payload);
    try {
      commit("ADD_ISSUE", payload);
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteIssue: async ({ commit }, payload) => {
    await axios.delete(`${issueList}/${payload}`);
    try {
      commit("DELETE_ISSUE", payload);
    } catch (error) {
      throw new Error(error);
    }
  },
  editIssue: async ({ commit }, payload) => {
    try {
      commit("EDIT_ISSUE", payload);
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
