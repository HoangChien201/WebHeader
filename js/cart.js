const cartApi = [
    {
        img: 'assets/ImageProJect/vr-glass.png',
        name: 'vr-glass',
        price: '23.00$',
        quantity: 2
    },
    {
        img: 'assets/ImageProJect/vr-glass.png',
        name: 'vr-glasss',
        price: '12.00$',
        quantity: 3
    },
    {
        img: 'assets/ImageProJect/vr-glass.png',
        name: 'vr-glasses',
        price: '22.00$',
        quantity: 4
    }
]
const tbody=document.querySelector('.tbody')
const htmlCart=cartApi.map((product)=>{
        return `
            <tr >
                <td><img src=${product.img} class='img'/></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <div class='qlt-btn'>
                        <i class="fas fa-minus icon minus"></i>
                        <input class='input-amount' value=${product.quantity}></input>
                        <i class="fas fa-plus icon plus"></i>
                    </div>
                </td>
            </tr>
        `
    })
tbody.innerHTML=htmlCart.join(' ')


//begin-total-cart
const subtotalPrice=document.querySelector('.subtotal-price')
const totalPrice=document.querySelector('.total-price')
let subtotal=0;
cartApi.forEach(element => {
    let price=element.price.split('$');
    subtotal+=element.quantity*parseInt(...price)
})
let total=subtotal+10;
subtotalPrice.innerText=subtotal+"$"
totalPrice.innerText=total+"$"
//end-total-cart
