const wrapperImageMain=document.querySelector('.wrapper-image-main');
const imageMains=document.querySelectorAll('.image-main')
const imageThumNails=document.querySelectorAll('.image-thum-nail')
function showImage(img){
    const indexImg=img.target.dataset.id
    wrapperImageMain.prepend(imageMains[indexImg-1])
    console.log(imageMains[indexImg])
}
imageThumNails.forEach((image)=>{
    image.onclick=showImage

})