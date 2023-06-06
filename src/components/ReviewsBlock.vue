<template>
  <figure class="reviews-block">
    <span class="reviews-block-text">узнайте что о нас думают</span>
    <span class="reviews-block-title">Отзывы о нашей работе</span>
    <ol class="reviews-block-list">
        <li class="reviews-block-list-li" v-for="(item, idx) in arrayDisp" :key="idx">
            <img v-bind:src="item.img" alt="avatar-img">
            <span>{{ item.title }}</span>
            <p>{{ item.description }}</p>
        </li>
    </ol>
    <div class="reviews-block-btns">
      <button class="reviews-block-btns-elipse" v-for="(item, idx) in arrayData" :key="idx">{{ idx }}</button>
    </div>
    <button class="reviews-block-btn">Просмотреть все отзывы</button>
  </figure>
</template>

<script>
export default {
  name: 'ReviewsBlock',

  props: {
    arrayData: Array
  },

  data: () => ({
    numLine: 1,
    arrayDisp: []
  }),

  methods: {
    displayArray (i) {
      this.arrayDisp.push(this.arrayData[this.arrayData.length - 1])
      this.arrayDisp.push(this.arrayData[i])
      this.arrayDisp.push(this.arrayData[i + 1])
    }
  },

  computed: {
    dataWatch () {
      this.displayArray(0)
      return this.arrayData
    }
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
