import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  // Начальная точка отсчёта (состояние)
  state: {
    menuElement: ['О клубе', 'Обучение', 'Снаряжение', 'Туры', 'Акции', 'Отзывы', 'Контакты'],
    linkMenu: ['/club', '/learn', '/equipment', '/tours', '/stocks', '/reviews', '/contacts'],
    emailCompany: 'email@mail.com',
    telephoneCompany: '+7 (***) 458 - 78 - 78',
    version: '0.0.0',
    offers: []
  },
  // "Выдача" данных
  // Возвращает значения state или других состояний
  // Преобразовать данные и вернуть
  getters: {
    // Положение данных горячие предложения
    getOffers: state => state.offers,

    /**
     * Вычисление текущего года
     * @returns { Number }
     */
    getNowYear: () => {
      const date = new Date()
      return date.getFullYear()
    }
  },
  // Изменение данных
  mutations: {
    setOffers (state, payload) {
      state.offers = payload
    }
  },
  // Запрос -> получение -> вызов действий mutations
  actions: {
    fetchOffers ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get('https://raw.githubusercontent.com/StasBeep/diving/content-line/content.json')
          .then(response => {
            resolve(response.data.offers)
          })
          .catch(error => console.log(error))
      }).then(res => {
        commit('setOffers', res)
      })
    }
  },
  modules: {
    // applyComponents: applyComponents
  }
})
