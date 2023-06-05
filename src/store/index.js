import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const APIcontent = 'https://raw.githubusercontent.com/StasBeep/diving/content-line/content.json'

const applyComponents = {
  namespaced: true,
  state: {
    menuElement: ['О клубе', 'Обучение', 'Снаряжение', 'Туры', 'Акции', 'Отзывы', 'Контакты'],
    linkMenu: ['/club', '/learn', '/equipment', '/tours', '/stocks', '/reviews', '/contacts'],
    emailCompany: 'email@mail.com',
    telephoneCompany: '+7 (***) 458 - 78 - 78',
    version: '0.0.0'
  },

  getters: {
    /**
     * Вычисление текущего года
     * @returns { Number }
     */
    getNowYear: () => {
      const date = new Date()
      return date.getFullYear()
    }
  }
}

const newsinfo = {
  namespaced: true,
  state: {
    offers: [],
    blog: []
  },
  getters: {
    // Положение данных горячие предложения
    getOffers: state => state.offers,

    // Положение данных наш блог
    getBlog: state => state.blog
  },
  mutations: {
    setOffers (state, payload) {
      state.offers = payload
    },

    setBlog (state, payload) {
      state.blog = payload
    }
  },
  // Запрос -> получение -> вызов действий mutations
  actions: {
    /**
     * Асинхронных запрос на данные горячего предложения
     * @param { commit } Передача под mutations
     * @returns Promise
     */
    fetchOffers ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get(`${APIcontent}`)
          .then(response => {
            resolve(response.data.offers)
          })
          .catch(error => console.log(error))
      }).then(res => {
        commit('setOffers', res)
      })
    },

    /**
     * Асинхронных запрос на данные горячего предложения
     * @param { commit } Передача под mutations
     * @returns Promise
     */
    fetchBlog ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get(`${APIcontent}`)
          .then(response => {
            resolve(response.data.blog)
          })
          .catch(error => console.log(error))
      }).then(res => {
        commit('setBlog', res)
      })
    }
  }
}

export default new Vuex.Store({
  // Начальная точка отсчёта (состояние)
  state: { },
  // "Выдача" данных
  // Возвращает значения state или других состояний
  // Преобразовать данные и вернуть
  getters: { },
  // Изменение данных
  mutations: { },
  // Запрос -> получение -> вызов действий mutations
  actions: { },
  modules: {
    applyComponents: applyComponents,
    newsinfo: newsinfo
  }
})
