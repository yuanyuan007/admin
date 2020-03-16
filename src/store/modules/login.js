import { getSen, setSen } from 'utils'
import Vue from 'vue'
const state = {
  flag: true,

}

const getters = {

}

const mutations = {
  setFlag(state, data) {
    state.flag = data;
  },
}
const actions = {}


export default {
  namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
};