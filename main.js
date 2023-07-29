let img = document.querySelector('.image-main');
function change_(phone)
{
    console.log( "src is : " + img.src);
    console.log( "phone is : " + phone);
    img.src = phone;
    
}

let container = document.querySelector('.container');
function colors(color){
    container.style.background=color;
}