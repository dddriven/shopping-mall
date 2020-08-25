module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375, // 视窗的宽度，对应的是设计稿的宽度
            viewportHeight: 667, // 视窗的高度，对应的是设计稿的高度
            unitPrecision: 5, // 指定'px'转化为视窗单位值的小数位数
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转化的class
            //当有很多class不需要转化时，比如可以在<div class="nav-bar" ignore>这样写。
            minPixelValue: 1, // 小于或等于'1px'不转换为视窗单位
            mediaQeury: false, // 允许在媒体查询中转换'px'
            exclude: [/TabBar/] // 指定不需要转化的文件，数组中的元素必须是正则表达式。
        },
    }
}