<template>
    <div class="article-container">
        <div class="left-nav">
            <LeftNav />
        </div>
        <div class="right-main">
            <router-view/>
        </div>
    </div>
</template>

<script>
import LeftNav from './LeftNav.vue'
export default {
  name: 'Main',
  components: {
    LeftNav
  }
}
</script>

<style lang="scss" scoped>
    .article-container {
        padding: 20px 50px;
        zoom: 1;
        .left-nav, .right-main {
            float: left;
            height: 100%;
            overflow: hidden;
        }
    }
    .article-container::after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        overflow: hidden;
    }
</style>
