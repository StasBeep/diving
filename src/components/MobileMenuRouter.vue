<template>
  <div class="header-transitions-mobile">
    <div class="header-transitions-mobile-up">
        <input type="checkbox" id="checkbox" class="header-transitions-mobile-menu-checkbox" @click="onGamburgerMenu">
        <label for="checkbox" class="header-transitions-mobile-menu-btn">
            <div class="header-transitions-mobile-menu-icon"></div>
        </label>
        <MenuSocial v-show="elementShow" />
    </div>
    <MenuRouter class="header-transitions-mobile-down" v-show="elementShow" />
  </div>
</template>

<script>

import MenuSocial from './MenuSocial.vue'
import MenuRouter from './MenuRouter.vue'

export default {
  name: 'MobileMenuRouter',

  props: {
    colorGabmburger: Boolean
  },

  components: {
    MenuSocial,
    MenuRouter
  },

  data: () => ({
    elementShow: false,
    statusCheckbox: false
  }),

  methods: {
    onGamburgerMenu () {
      console.log(this.$el)
      this.statusCheckbox = !this.statusCheckbox
      if (this.statusCheckbox) {
        this.$el.style.backgroundColor = 'white'
        this.elementShow = true
      } else {
        this.$el.style.backgroundColor = 'transparent'
        this.elementShow = false
      }
    },

    setColorGamburger () {
      if (this.colorGabmburger) {
        this.$el.children[0].children[1].children[0].classList.add('header-transitions-mobile-menu-icon-color')
      }
    }
  },

  computed: {
    watchColorGamburger () {
      if (this.colorGabmburger) {
        this.setColorGamburger()
      }
      return this.colorGabmburger
    }
  },

  mounted () {
    this.setColorGamburger()
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
