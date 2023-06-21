<template>
  <div class="footer">
    <div class="footer-up">
      <div class="footer-left">
          <img src="../assets/logo_aquatica.svg" alt="logo">
          <span class="footer-left-tele">{{ telephoneCompany }}</span>
          <a href="mailto:someone@yoursite.com" class="footer-left-email" target="_blank">{{ emailCompany }}</a>
      </div>
      <div class="footer-right">
          <MenuRouter :colorElement="whiteElement" :findingElement="findingElement" />
          <MenuSocial :colorElement="whiteElement" />
          <span class="footer-right-law">Все права защищены © 2010-{{ nowYear }}</span>
          <h6 class="footer-right-title">Обучение дайвингу в Москве</h6>
          <span class="footer-right-version">version: {{ version }}</span>
      </div>
    </div>
    <a class="footer-anchor" href="#logo" v-show="widthWindowsShow">Вернуться наверх</a>
  </div>
</template>

<script>

import MenuRouter from '../components/MenuRouter.vue'
import MenuSocial from '../components/MenuSocial.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FooterBlock',

  data: () => ({
    whiteElement: 'white',
    findingElement: 'footer',
    widthWindowsShow: false
  }),

  components: {
    MenuRouter,
    MenuSocial
  },

  methods: {
    /**
     * Просмотр ширины страницы
     */
    _showUp () {
      if (this.$el.clientWidth === 375) {
        this.widthWindowsShow = true
      }
    }
  },

  computed: {
    ...mapState('applyComponents', {
      emailCompany: 'emailCompany',
      telephoneCompany: 'telephoneCompany',
      version: 'version'
    }),

    ...mapGetters('applyComponents', {
      nowYear: 'getNowYear'
    })
  },

  mounted () {
    this._showUp()
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
