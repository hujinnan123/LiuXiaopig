<template>
    <div class="main-container">
        <div class="header">
            <header-nav/>
        </div>
        <div class="main">
            <router-view/>
        </div>
        <div class="footer">底部</div>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
export default {
  name: 'Home',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
.main-container {
    position: relative;
    width: 100%;
    height: 100%;

    .header, .footer {
        position: fixed;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ccc;
    }
    .header {
        top: 0;
    }
    .main {
        position: absolute;
        top: 50px;
        width: 100%;
        height: 825px;
        overflow: hidden;
        background: #f6f6f6;
    }
    .footer {
        bottom: 0;
    }
}
</style>
