<template>
  <div class="footer">
    <div class="footer-left">
        <img src="../assets/logo_aquatica.svg" alt="logo">
        <span class="footer-left-tele">{{ telephoneCompany }}</span>
        <span class="footer-left-email">{{ emailCompany }}</span>
    </div>
    <div class="footer-right">
        <MenuRouter :colorElement="whiteElement" :findingElement="findingElement" />
        <MenuSocial :colorElement="whiteElement" />
        <span class="footer-right-law">Все права защищены © 2010-{{ nowYear }}</span>
        <h6 class="footer-right-title">Обучение дайвингу в Москве</h6>
    </div>
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
    findingElement: 'footer'
  }),

  computed: {
    ...mapState({
      emailCompany: 'emailCompany',
      telephoneCompany: 'telephoneCompany'
    }),

    ...mapGetters({
      nowYear: 'getNowYear'
    })
  },

  components: {
    MenuRouter,
    MenuSocial
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
