import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuElement: ['О клубе', 'Обучение', 'Снаряжение', 'Туры', 'Акции', 'Отзывы', 'Контакты'],
    linkMenu: ['/club', '/learn', '/equipment', '/tours', '/stocks', '/reviews', '/contacts'],
    emailCompany: 'email@mail.com',
    telephoneCompany: '+7 (***) 458 - 78 - 78',
    version: '0.0.0'
  },
  getters: {
    getNowYear: () => {
      const date = new Date()
      return date.getFullYear()
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
