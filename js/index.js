var ul = document.querySelector('ul.main-list')
console.log(lis);
// 遍历li，添加类名


let string = "";
for (let i = 0; i < newArticle.length; i++) {
    string += `<li class="main-list-item ">
    <a href="">
        <div class="li-logo">
            <img src="${newArticle[i].logo}" alt="">
        </div>
        <div class="main-text">
            <h2 class="title">${newArticle[i].title}</h2>
            <p class="article">${newArticle[i].content}</p>
        </div>
    </a>
</li>
`}
ul.innerHTML = string;

var lis = document.querySelectorAll('.main-page .main-content.core ul.main-list .main-list-item')

for (let i = 0; i < lis.length; i++) {
    lis[i].classList.add('bShadow', 'bShadow-12', 'bShadow-19h', 'wow', 'animate__animated', 'animate__bounceInLeft')
}

