// 控制导航栏菜单按钮
var btn = document.querySelector('.btn')
var uls = document.querySelector('ul.header-m-nav')
var menuMs = document.querySelectorAll(' .header-m-top span.menu-mobile')

btn.onclick = function () {
    if (parseInt(window.getComputedStyle(uls, null).height) === 0) {
        uls.style = 'transition: all 0.4s ease-in-out 0s; display: block; height: 164px;'
        menuMs[0].style = ' transform: translateY(7px) rotate(45deg);'
        menuMs[1].style = ' transform:  rotate(45deg);'
        menuMs[2].style = ' transform:translateY(-7px) rotate(135deg);'
    } else {
        uls.style = 'transition: all 1s ease-in-out 0s; display:block; height: 0px;'
        menuMs[0].style = ' transform:  translateY(7px) rotate(0deg);'
        menuMs[1].style = ' transform:  translateY(0px) rotate(0deg);'
        menuMs[2].style = ' transform:  translateY(-7px) rotate(90deg);'
        setTimeout(() => {
            menuMs[0].style = ' transform: translateY(0px) rotate(0deg);'
            menuMs[1].style = ' transform: translateY(0px) rotate(0deg);'
            menuMs[2].style = ' transform: translateY(0px) rotate(0deg);'
        }, 600);
    }
}