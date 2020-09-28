var minus = document.querySelector('.main-content .fontSize .minus')
var plus = document.querySelector('.main-content .fontSize .plus')
var content = document.querySelector('.main-content .content')

minus.onclick = function () {
    content.style.fontSize = parseInt(content.style.fontSize) - 1 + 'px'
}
plus.onclick = function () {
    content.style.fontSize = parseInt(content.style.fontSize) + 1 + 'px'
}
