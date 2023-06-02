<template>
  <div class="footer">
    <div class="footer-left">
        <img src="../assets/logo_aquatica.svg" alt="logo">
        <span>{{ telephoneCompany }}</span>
        <span>{{ emailCompany }}</span>
    </div>
    <div class="footer-right">
        <MenuRouter />
        <MenuSocial />
        <span>Все права защищены © 2010-{{ nowYear }}</span>
        <span>Обучение дайвингу в Москве</span>
    </div>
  </div>
</template>

<script>

import MenuRouter from '../components/MenuRouter.vue'
import MenuSocial from '../components/MenuSocial.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FooterBlock',

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
