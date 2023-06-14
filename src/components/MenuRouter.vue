<template>
  <nav class="menu-router-nav">
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

    _checkRouting (i) {
      if (this.nowRouting === `${this.collectionsLink[i]}`) {
        return true
      }
      return false
    },

    _changeColor () {
      if (this.colorElement === 'white') {
        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add('menu-router-white')
        }
        this.elementShow = false
      }
    },

    _changePosition () {
      if (this.findingElement === 'footer') {
        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add('menu-router-ellipse')
        }
      }
    }
  },

  computed: {
    ...mapState({
      collectionsRouter: 'menuElement',
      collectionsLink: 'linkMenu'
    }),

    nowRouting () {
      return this.$route.path
    },

    nowColorElement () {
      if (this.colorElement === 'white') {
        this._changeColor()
        return 'white'
      }
      return 'blue'
    },

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
