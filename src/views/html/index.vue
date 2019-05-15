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
        height: 820px;
        zoom: 1;
        .left-nav {
            float: left;
            overflow-y: auto;
        }
        .right-main {
            height: 800px;
            margin-left: 200px;
            overflow-y: auto;
            text-align: left;
            font-size: 14px;
            line-height: 28px;
        }
        .right-main::-webkit-scrollbar {/*滚动条整体样式*/
            width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        .right-main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: #535353;
        }
        .right-main::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 10px;
            background: #EDEDED;
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
