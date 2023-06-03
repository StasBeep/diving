<template>
    <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
    <div class="wrapper wrapper-forcontent">
        <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
        <div class="wrapper-container content-without-footer">
            <!--Шапка сайта-->
            <header>
                <HeaderMain />
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
        <footer>
            <FooterBlock />
        </footer>
    </div>
</template>

<script>

import HeaderMain from '../components/Header.vue'
import FooterBlock from '../components/Footer.vue'

export default {
  name: 'CatalogView',
  components: {
    HeaderMain,
    FooterBlock
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
