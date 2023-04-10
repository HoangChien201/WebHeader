// ---beign-slide-image--

const images=[
    'assets/ImageProJect/banner-1.jpg',
    'assets/ImageProJect/banner-2.jpg',
    'assets/ImageProJect/banner-3.jpg',
    'assets/ImageProJect/banner-4.jpg',    
];
const wrapperImg=document.querySelector('.wrapper-img')

function prevImage(){
    wrapperImg.prepend(document.querySelectorAll('.wrapper-banner-image .image')[3])
}
function nextImage(){
    wrapperImg.append(document.querySelectorAll('.wrapper-banner-image .image')[0])
}
setInterval(()=>{
    nextImage()
},3000)

// ---end-slide-image--


// ---beign-top-categories--

const productTops = [
    {
        name: 'Sony PlayStation VR2/ PS VR 2',
        img: 'assets/ImageProJect/Products/top-1.png'
    },
    {
        name: 'Quest Pro 256GB',
        img: 'assets/ImageProJect/Products/top-2.png'
    },
    {
        name: 'Meta Quest 2 256GB',
        img: 'assets/ImageProJect/Products/top-3.png'
    }
]

const containerProduct = document.querySelector('.container-product')

const htmlProductTops = productTops.map((product) =>
    `<div class='product'>
        <h1 class='name'>${product.name}</h1>
        <img src=${product.img}></img>
    </div>`
)
containerProduct.innerHTML = htmlProductTops.join(' ')

// ---end-top-categories--
// ---begin-container-product--

//begin-tab-head
const catogorys=[
    'Accessory','Nreal Air',
    'Valve Index','Sony Playstation'    
]
const listWrapper=document.querySelector('.list-wrapper')

const htmlCatagories=catogorys.map((catogory) =>
    `<span class='catogory'>${catogory}</span>`
)
listWrapper.innerHTML=htmlCatagories.join(' ');
//end-tab-head
//begin-slide-wrapper

//end-slide-wrapper
const valueProducts=[
    {
        img:'assets/ImageProJect/Products/product-1.jpg',
        name:'Meta Quest Pro 256GB',
        price:'26.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-2.jpg',
        name:'Meta Quest Link Cable',
        price:'12.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-3.jpg',
        name:'Meta Quest 2 Elite Strap With Battery',
        price:'10.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-4.jpg',
        name:'Valve Index VR Kit',
        price:'43.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-5.jpg',
        name:'Meta Quest 2 128GB',
        price:'32.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-6.jpg',
        name:'Kính Thông Minh Nreal Air',
        price:'12.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-7.jpg',
        name:'Nreal Adapter + Apple Lightning Digital AV Adapter',
        price:'62.55$'
    },
    {
        img:'assets/ImageProJect/Products/product-8.jpg',
        name:'Valve Index Controllers',
        price:'12.55$'
    },
]

const wrapperSlideProduct=document.querySelector('.wrapper-slide-product')

const htmlValueProducts=valueProducts.map((product)=>`
    <div class='wrapper-product'>
        <img src=${product.img} class='img'/>
        <div class='rating'>
            <i class="fas fa-star rating-active"></i>
            <i class="fas fa-star rating-active"></i>
            <i class="fas fa-star rating-active"></i>
            <i class="fas fa-star rating-active"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href='productDetail.html' class='name'>${product.name}</a>
        <p class'price'>${product.price}</p>
        <i class="fas fa-cart-plus icon cart"></i>
    </div>`
    )

wrapperSlideProduct.innerHTML=htmlValueProducts.join('')
// ---end-container-product--

