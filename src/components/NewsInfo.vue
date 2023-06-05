<template>
  <ol class="newscomponent">
    <li class="newscomponent-li" v-for="(item, idx) in dataNews" :key="idx">
        <img class="newscomponent-li-img" v-bind:src="item.img" alt="escort" width="318" height="157">
        <span class="newscomponent-li-title">{{ item.title }}</span>
        <p class="newscomponent-li-text">{{ item.description }}</p>
        <a v-bind:href="item.link" class="newscomponent-li-link" target="_blank">Перейти &#10140;</a>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'NewsInfo',

  props: {
    // Данные новестей блогов предложений
    dataNews: Array
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
