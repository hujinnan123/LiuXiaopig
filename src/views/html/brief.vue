<template>
    <div class="brief">
        <div class="title">HTML 简介</div>
        <div class="code-pic">
            <textarea name="" id="" cols="40" rows="12" disabled readonly style="resize:none">
                "<!DOCTYPE html>
                 <html>
                     <head></head>
                     <body>
                        <h2>标题</h2>
                        <p>段落</p>    
                     </body>
                 </html>
                "
            </textarea>
        </div>
        <div class="title">实例解析</div>
        <div class="title-describe">
            <p>"<!DOCTYPE html>" 这只是一个声明 用来告知 Web 浏览器页面使用了哪种 HTML 版本</p>
            <p><span class="font">进阶：</span>这个标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。
            "!DOCTYPE" 声明必须是 HTML 文档的第一行，位于 "html" 标签之前。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
            </p>
            <p><span> &lt;</span>head<span> > </span> 包含了页面的元信息</p>
            <p><span> &lt; </span>body<span> > </span> 包含了页面的可见的页面内容</p>
        </div>
        <div class="title">什么是HTML？</div>
        <ul class="title-describe">
            <li>html是用来描述网页的一种语言</li>
            <li>HTML不是一种编程语言，而是一种标记语言</li>
            <li>标记语言是一套标记标签</li>
            <li>HTML使用标记标签来描述网页</li>
            <li>HTML文档包含了HTML标签及文本内容</li>
            <li>HTML文档也叫web页面</li>
        </ul>
        <div class="title">HTML 标签</div>
        <ul class="title-describe">
            <li>
                html标记标签通常被称为HTML标签
            </li>
            <li>HTML标签是由尖括号包围的关键词比如<span>&lt;</span>html<span>></span></li>
            <li>标签对中的第一个标签也被称为开始标签，第二个标签是结束标签</li>
            <li>开始和结束标签也被称为开放和闭合标签</li>
            <li><span>&lt;</span>标签>内容&lt;/标签></li>
        </ul>
        <div class="title">HTML 版本</div>
        <div class="title-describe">
            <ul>
                <li>HTML     --------- 1991</li>
                <li>HTML+    --------- 1993</li>
                <li>HTML2.0  --------- 1995</li>
                <li>HTML3.2  --------- 1997</li>
                <li>HTML4.01 --------- 1999</li>
                <li>XHTML1.0 --------- 2000</li>
                <li>HTML5    --------- 2012</li>
                <li>XHTML5   --------- 2013</li>
            </ul>
        </div>
        <div class="title">HTML5</div>
        <div>&lt;!docutype html></div>
        <div class="title">HTML4.01</div>
        <div>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd"></div>
<div class="title">HTML1.0</div>
<div>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"></div>
    </div>
</template>

<style lang="scss">
    @import './index.scss'
</style>
