const wrapperLinkPage=document.querySelector('.nav-bar')
const header=document.querySelector('.wrapper-header')

const valuePages=[
    {
        to:'index.html',
        name:'Home'
    },
    {
        to:'shop.html',
        name:'Shop'
    },
    {
        to:'cart.html',
        name:'Cart'
    },
    {
        to:'/about',
        name:'About'
    },
    {
        to:'/contact',
        name:'Contact'
    },
]

window.onscroll=()=>{
    if(window.scrollY > 82){
        header.classList.add('fixed')  
    }
    else{
        header.classList.remove('fixed')  
    }
}
let html=[];
valuePages.forEach((value)=>{
    html.push(`<a class="tag" href="${value.to}">${value.name} </a>`)
})
html.push('<a href="login.html" class="tag">Sign Up</a>')
wrapperLinkPage.innerHTML=html.join(' ')
