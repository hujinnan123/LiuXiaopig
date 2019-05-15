<template>
    <div class="course">
        <div class="title">
            HTML教程
        </div>
        <div class="title-describe">
            <p>Html是超文本标记语言，是一种用于创建网页的标准标记语言。</p>
            <p>为什么说html是一种标记语言呢? 假如说我们使用记事本去写作文 没有任何的文字标记的话，我们看到的只是一句很长的话而已。如果我们使用html的话并将这段文字添加&lt;<span></span><span>h2></span>我是文字我是文字&lt;/<span>h2></span>这样标记的话。那么这段文字在浏览器解析时，将会显示以下效果：</p>
            <div class="code"><h2>我是文字我是文字</h2></div>
        </div>
        <div class="title">
            HTML 实例
        </div>
        <div class="code-pic" style="padding-left:10px;">
           <textarea name="" id="" cols="40" rows="12" disabled readonly style="resize:none">
               "<!DOCTYPE html>
               <html>
                    <head></head>
                    <body>
                        <!-- 复制时请去掉引号 -->
                        <h2>我的第一个标题</h2>
                        <p>我的第一个段落</p>
                    </body>   
                </html>"
           </textarea>
        </div>
        <div class="title">
            HTML 后缀名
        </div>
        <div class="title-describe">
            <span>.html</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './index.scss';

</style>
