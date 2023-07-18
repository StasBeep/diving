<template>
  <div>
    <ol class="foto-gallery">
      <li class="foto-gallery-li" v-for="(item, idx) in displayArray" :key="idx">
          <img  class="foto-gallery-li-img" v-bind:src="fotoArray[item - 1].image" alt="foto-gallery" width="318" height="318">
      </li>
    </ol>
    <button class="foto-gallery-btn" v-if="displayBtn" @click="addFotoContent">Смотреть ещё фото</button>
  </div>
</template>

<script>
export default {
  name: 'FotoGallery',

  props: {
    fotoArray: Array
  },

  data: () => ({
    displayArray: 4, // Количество "экранных" элементов
    nArrayLine: 0, // Количество строк относительно content
    activLine: 1, // Количество активных строк (по умолчанию 1)
    displayBtn: true // Видимость кнопки
  }),

  methods: {
    addFotoContent () {
      this.nArrayLine = Math.floor(Math.sqrt(this.fotoArray.length))
      this.activLine++
      if (this.activLine === this.nArrayLine) {
        this.displayArray = this.fotoArray.length
        this.displayBtn = false
      } else {
        this.displayArray = this.displayArray * this.activLine
      }
    }
  },

  computed: {

  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
