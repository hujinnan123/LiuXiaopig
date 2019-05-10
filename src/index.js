/* 更改全部html的title */
function reset() {
    document.getElementsByTagName('title')[0].innerText = "刘小猪家园"
}
const Group = [reset]

/* 监听页面加载事件 */

window.onload = function () {
    if (!Group.length) return;
    Group.map(function (item) {
        return item()
    })
}