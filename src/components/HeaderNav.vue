<template>
  <div class="header-nav">
    <ul class="nav-list">
      <li>
        <router-link to="/html"><span>Html</span></router-link>
      </li>
      <li>
        <router-link to="/css"><span>Css</span></router-link>
      </li>
      <li>
        <router-link to="/javaScript"><span>JavaScript</span></router-link>
      </li>
      <li>
        <router-link to="/vue"><span>Vue</span></router-link>
      </li>
      <li>
        <router-link to="/react"><span>React</span></router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header-nav {
  width: 100%;
  height: 100%;
  overflow: hidden;
//   background: rgba(0, 0, 0, 0.4);
  background: #309886;
  .router-link-active {
    background: #61cc73;
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    li {
      position: relative;
      width: 80px;
      height: 50px;
      text-align: center;
      transition: ease-in-out 0.2s;
      a {
            display: block;
            width: 100%;
            height: 100%;
            font-size: 14px;
            color: #fff;
            position: relative;
            span{
                position: relative;
            }
      }
      a:before {
        content: "";
        position: absolute;
        background: #61cc73;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        height: 0%;
        width: 100%;
        transition: ease-in-out 0.2s;
      }
      a:hover:before {
        top: 0;
        right: 0;
        bottom: auto;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
