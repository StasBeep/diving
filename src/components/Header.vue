<template>
    <div>
        <div class="header-top">
          <img class="header-top-img" src="../assets/logo_aquatica.svg" alt="logo">
          <ModalFeedback class="header-top-feed" />
        </div>
        <nav class="menu">
          <MobileMenuRouter class="menu-line-mobile" />
          <MenuRouter class="menu-line-router" />
          <MenuSocial class="menu-line-social" />
          <ModalFeedback class="menu-line-feedback" />
        </nav>
    </div>
</template>

<script>

import ModalFeedback from './ModalFeedback.vue'
import MobileMenuRouter from './MobileMenuRouter.vue'
import MenuRouter from './MenuRouter.vue'
import MenuSocial from './MenuSocial.vue'

export default {
  name: 'HeaderMain',

  components: {
    ModalFeedback,
    MobileMenuRouter,
    MenuRouter,
    MenuSocial
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped />
