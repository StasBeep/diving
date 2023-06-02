<template>
    <div>
    <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
    <div class="wrapper-forcontent">
        <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
        <div class="content-without-footer">
            <!--Шапка сайта-->
            <header>
                <h1>Привет</h1>
            </header>

            <!--Основная часть-->
            <main>
                <!--Первая секция основной части-->
                <section>
                    <MainContent/>
                </section>
                <!--Вторая секция-->
                <section></section>
            </main>
        </div>

            <!--Подвал сайта-->
            <footer>Версия: 0.1.0</footer>
        </div>
    </div>
</template>

<script>

import MainContent from '../components/MainContent.vue'

export default {
  name: 'TemplateView',
  components: {
    MainContent
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
@import '../scss/style.scss';
</style>
