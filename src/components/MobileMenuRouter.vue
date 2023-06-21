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
    elementShow: false, // положение видимости блоков
    statusCheckbox: false // положение checkbox
  }),

  methods: {
    /**
     * Включение и выключение меню
     */
    onGamburgerMenu () {
      this.statusCheckbox = !this.statusCheckbox
      if (this.statusCheckbox) {
        this.$el.style.backgroundColor = 'white'
        this.elementShow = true
        if (this.colorGabmburger) {
          this.$el.classList.add('header-transitions-mobile-plus-white')
        } else {
          this.$el.classList.add('header-transitions-mobile-plus')
        }
      } else {
        this.$el.style.backgroundColor = 'transparent'
        this.elementShow = false
        if (this.colorGabmburger) {
          this.$el.classList.remove('header-transitions-mobile-plus-white')
        } else {
          this.$el.classList.remove('header-transitions-mobile-plus')
        }
      }
    },

    /**
     * Изменение цвета в зависимости от расположения
     */
    setColorGamburger () {
      if (this.colorGabmburger) {
        this.$el.children[0].children[1].children[0].classList.add('header-transitions-mobile-menu-icon-color')
      }
    }
  },

  computed: {
    /**
     * Цвет гамбургера (true - белый)
     */
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
