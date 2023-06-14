<template>
  <div class="header-transitions-mobile">
    <div class="header-transitions-mobile-up">
        <input type="checkbox" id="checkbox" class="header-transitions-mobile-menu-checkbox">
        <label for="checkbox" class="header-transitions-mobile-menu-btn">
            <div class="header-transitions-mobile-menu-icon"></div>
        </label>
        <MenuSocial />
    </div>
    <MenuRouter />
  </div>
</template>

<script>

import MenuSocial from './MenuSocial.vue'
import MenuRouter from './MenuRouter.vue'

export default {
  name: 'MobileMenuRouter',

  components: {
    MenuSocial,
    MenuRouter
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
