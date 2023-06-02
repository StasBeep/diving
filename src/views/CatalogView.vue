<template>
    <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
    <div class="wrapper wrapper-forcontent">
        <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
        <div class="content-without-footer">
            <!--Шапка сайта-->
            <header class="header">
                <HeaderMain />
                <ModalFeedback />
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

import HeaderMain from '../components/Header.vue'
import ModalFeedback from '../components/ModalFeedback.vue'

export default {
  name: 'CatalogView',
  components: {
    HeaderMain,
    ModalFeedback
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
