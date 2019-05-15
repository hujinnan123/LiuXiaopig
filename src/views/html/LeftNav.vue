<template>
    <div class="left-nav">
        <ul class="nav-list">
            <li>
                <router-link to="/html/course">HTML 教程</router-link>
            </li>
            <li>
                <router-link to="/html/brief">HTML 简介</router-link>
            </li>
            <li>
                <router-link to="/html/editor">HTML 编辑器</router-link>
            </li>
            <li>
                <router-link to="/html/basics">HTML 基础</router-link>
            </li>
            <li>
                <router-link to="/html/element">HTML 元素</router-link>
            </li>
            <li>
                <router-link to="/html/attr">HTML 属性</router-link>
            </li>
            <li>
                <router-link to="/html/title">HTML 标题</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .left-nav {
        width: 200px;
        height: 100%;
        overflow-y: auto;

        .nav-list {
            width: 100%;
            text-align: left;
            font-size: 14px;
            color: #fff;
            li {
                margin: 0 auto;
                width: 150px;
                height: 35px;
                line-height: 35px;
                transition: all .2s;
                a{
                    display: block;
                    color: #000;
                    text-indent: 20px;
                    transition: all .2s;
                }
                .router-link-active {
                    background: #61cc73;
                    color: #fff;
                    font-weight: 600;
                }
            }
            li:hover {
                a{
                    font-weight: 600;
                }
            }
        }
    }
</style>
