<template>
  <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
  <div class="wrapper wrapper-forcontent">
    <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
    <div class="content-without-footer">
      <!--Шапка сайта-->
      <header class="header">
        <nav class="header-secondmenu">
          <MenuRouter class="header-secondmenu-route" :colorElement="colorElement" />
          <ModalFeedback class="header-secondmenu-feedback" />
          <MenuSocial class="header-secondmenu-social" />
        </nav>
        <div class="info">
          <img src="../assets/logo_aquatica.svg" alt="">
          <span>Путешествие в тысячу миль</span>
          <span>Начинается с первого клика</span>
          <button>Хочу нырять...</button>
          <div class="info-details">
            <span>Работаем с 2009 года</span>
            <span>Более 2500 учеников</span>
          </div>
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
        </div>
      </header>

      <!--Основная часть-->
      <main>
        <!--Первая секция основной части-->
        <section>
        </section>
        <!--Вторая секция-->
        <section></section>
      </main>
    </div>

    <!--Подвал сайта-->
    <footer>Версия: 0.0.0</footer>
  </div>
</template>

<script>
import MenuRouter from '../components/MenuRouter.vue'
import MenuSocial from '../components/MenuSocial.vue'
import ModalFeedback from '../components/ModalFeedback.vue'

export default {
  name: 'HomeView',
  components: {
    MenuRouter,
    MenuSocial,
    ModalFeedback
  },

  data: () => ({
    colorElement: 'white',
    findingElement: 'footer'
  })
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
