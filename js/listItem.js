const listItems=document.querySelector('.list-item')
const values=[
    {
        heading:'MENTAL HEALTH',
        text:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon:'assets/ImageProJect/vr-glasses.png'
    },
    {
        heading:'​Realistic Experience',
        text:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon:'assets/ImageProJect/virtual-reality.png'
    },
    {
        heading:'Relax',
        text:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon:'assets/ImageProJect/vr-glass2.png'
    }
]

let htmlListItem=[];
values.forEach((value)=>{
    htmlListItem.push(`
    <div class='wrapper-list-item'>
        <div class='wrapper-icon'>
            <img src=${value.icon} class='icon'/>
        </div>
        <h5 class='heading'>${value.heading}</h5>
        <p class='text'>${value.text}</p>
        <a class='button'>more</a>
    </div>`)
})
listItems.innerHTML=htmlListItem.join(' ')