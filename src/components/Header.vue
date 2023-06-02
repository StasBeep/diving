<template>
    <div>
        <div class="header-top">
          <img src="../assets/logo_aquatica.svg" alt="logo">
          <ModalFeedback />
        </div>
        <nav class="menu">
          <MenuRouter />
          <MenuSocial />
        </nav>
    </div>
</template>

<script>

import ModalFeedback from './ModalFeedback.vue'
import MenuRouter from './MenuRouter.vue'
import MenuSocial from './MenuSocial.vue'

export default {
  name: 'HeaderMain',

  components: {
    ModalFeedback,
    MenuRouter,
    MenuSocial
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped />
