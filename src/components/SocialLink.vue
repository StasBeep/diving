<template>
  <ol class="social-cards">
    <li class="social-cards-card">
      <img class="social-cards-card-img" src="../assets/social-vk.svg" alt="social-vk">
      <span class="social-cards-card-title">{{ title }}</span>
      <a class="social-cards-card-link" href="#">Присоединиться</a>
    </li>
    <li class="social-cards-card">
      <img class="social-cards-card-img" src="../assets/social-face.svg" alt="social-vk">
      <span class="social-cards-card-title">{{ title }}</span>
      <a class="social-cards-card-link" href="#">Присоединиться</a>
    </li>
    <li class="social-cards-card">
      <img class="social-cards-card-img" src="../assets/social-forum.svg" alt="social-vk">
      <span class="social-cards-card-title">{{ title }}</span>
      <a class="social-cards-card-link" href="#">Присоединиться</a>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'SocialLink',

  data: () => ({
    title: 'уже более 5000 тысяч людей в курсе новостей'
  })
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
