<template>
  <nav>
    <router-link v-show="elementShow" class="menu-router-main" to="/">Главная</router-link>
    <button class="menu-router" v-for="item in collectionsRouter" :key="item" @click="stepRouting(item)">
        {{ item }}
    </button>
  </nav>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'MenuRouter',

  data: () => ({
    elementShow: true
  }),

  props: {
    colorElement: String,
    findingElement: String
  },

  methods: {
    /**
     * Изменение командной строки
     * @param { String } path routing
     */
    stepRouting (element) {
      switch (element) {
        case `${this.collectionsRouter[0]}`:
          if (this._checkRouting(0)) {
            return
          }
          this.$router.push(`${this.collectionsLink[0]}`)
          break
        case `${this.collectionsRouter[1]}`:
          if (this._checkRouting(1)) {
            return
          }
          this.$router.push(`${this.collectionsLink[1]}`)
          break
        case `${this.collectionsRouter[2]}`:
          if (this._checkRouting(2)) {
            return
          }
          this.$router.push(`${this.collectionsLink[2]}`)
          break
        case `${this.collectionsRouter[3]}`:
          if (this._checkRouting(3)) {
            return
          }
          this.$router.push(`${this.collectionsLink[3]}`)
          break
        case `${this.collectionsRouter[4]}`:
          if (this._checkRouting(4)) {
            return
          }
          this.$router.push(`${this.collectionsLink[4]}`)
          break
        case `${this.collectionsRouter[5]}`:
          if (this._checkRouting(5)) {
            return
          }
          this.$router.push(`${this.collectionsLink[5]}`)
          break
        case `${this.collectionsRouter[6]}`:
          if (this._checkRouting(6)) {
            return
          }
          this.$router.push(`${this.collectionsLink[6]}`)
          break
      }
    },

    /**
     * Наблюдение за состоянием route
     * @param { String } i path
     */
    _checkRouting (i) {
      if (this.nowRouting === `${this.collectionsLink[i]}`) {
        return true
      }
      return false
    },

    /**
     * Изменение цвета относительно положения элементов
     */
    _changeColor () {
      if (this.colorElement === 'white') {
        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add('menu-router-white')
        }
        this.elementShow = false
      }
    },

    /**
     * Добавление точек в меню относительно положения компонента
     */
    _changePosition () {
      if (this.findingElement === 'footer') {
        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add('menu-router-ellipse')
        }
      }
    }
  },

  computed: {
    ...mapState('applyComponents', {
      collectionsRouter: 'menuElement',
      collectionsLink: 'linkMenu'
    }),

    /**
     * Данный path
     */
    nowRouting () {
      return this.$route.path
    },

    /**
     * Наблюдение за цветом элемента
     */
    nowColorElement () {
      if (this.colorElement === 'white') {
        this._changeColor()
        return 'white'
      }
      return 'blue'
    },

    /**
     * Наблюдение за положением компонента на странице
     */
    nowFindingElement () {
      if (this.findingElement === 'footer') {
        this._changePosition()
        return 'white'
      }
      return 'blue'
    }
  },

  mounted () {
    this._changeColor()
    this._changePosition()
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
