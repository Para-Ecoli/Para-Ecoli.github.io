// 控制台信息
console.clear();
console.log("%c 有朋自远方来, 不亦说乎.", "background:#24272A; color:#ffffff", "");
console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/Para-Ecoli");

// 浏览器标题变化
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    document.hidden ? (
        document.title = '嗨，想我了吗？',
        clearTimeout(titleTime)
    ) : (
        document.title = OriginTitle,
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000)
    );
});