import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuElement: ['О клубе', 'Обучение', 'Снаряжение', 'Туры', 'Акции', 'Отзывы', 'Контакты'],
    linkMenu: ['/club', '/learn', '/equipment', '/tours', '/stocks', '/reviews', '/contacts']
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
