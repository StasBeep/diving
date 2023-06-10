<template>
  <figure class="reviews-block">
    <span class="reviews-block-text">узнайте что о нас думают</span>
    <span class="reviews-block-title">Отзывы о нашей работе</span>
    <ol class="reviews-block-list">
      <li class="reviews-block-list-li" v-for="(item, idx) in arrayVis" :key="idx">
        <img class="reviews-block-list-li-img" v-bind:src="item.img" alt="avatar-img">
        <span class="reviews-block-list-li-title">{{ item.title }}</span>
        <p class="reviews-block-list-li-text">{{ item.description }}</p>
      </li>
    </ol>
    <div class="reviews-block-btns">
      <button
        class="reviews-block-btns-elipse"
        v-for="(item, idx) in curArr"
        :key="idx"
        @click="onClick(idx)"></button>
    </div>
    <button class="reviews-block-btn">Просмотреть все отзывы</button>
  </figure>
</template>

<script>
export default {
  name: 'ReviewsBlock',

  props: {
    arrayVis: Array,
    curArr: Number,
    cur: Number
  },

  data: () => ({
    firstLoad: true
  }),

  methods: {
    /**
     * Эмит с номером новости
     * @param { Number } page номер кнопки
     */
    onClick (page) {
      this.$emit('changeReviews', page)
      this.changeColor(page)
    },

    /**
     * Изменение цвета в зависимости от активности
     * + первый круг белый
     * @param { Number } i номер кнопки
     */
    changeColor (i) {
      this.$el.children[3].children[this.cur].classList.remove('reviews-block-btns-elipse-active')
      this.$el.children[3].children[i].classList.add('reviews-block-btns-elipse-active')

      if (this.firstLoad) {
        this.$el.children[3].children[0].classList.add('reviews-block-btns-elipse-del-active')
        this.firstLoad = false
      }

      if (i === 0) {
        this.$el.children[3].children[0].classList.remove('reviews-block-btns-elipse-del-active')
        this.firstLoad = !this.firstLoad
      }
    }
  },

  computed: {
    /**
     * Первое положение цвета elipse
     */
    firstPosColor () {
      return this.cur
    }
  },

  mounted () {
    console.clear()
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
