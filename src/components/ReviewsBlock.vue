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
      <button class="reviews-block-btns-elipse" v-for="(item, idx) in curArr" :key="idx" @click="onClick(idx)">{{ idx }}</button>
    </div>
    <button class="reviews-block-btn">Просмотреть все отзывы</button>
  </figure>
</template>

<script>
export default {
  name: 'ReviewsBlock',

  props: {
    arrayVis: Array,
    curArr: Number
  },

  methods: {
    onClick (page) {
      this.$emit('changeReviews', page)
    }
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
