const img1 = document.querySelector('#image1 button');
const img2 = document.querySelector('#image2 button');
const img3 = document.querySelector('#image3 button');
const img4 = document.querySelector('#image4 button');


const imgContainer = document.querySelector('.imagecontainer img');
const pContainer = document.querySelector('.imagecontainer p');

img1.addEventListener('click',()=>{
    imgContainer.setAttribute('src','./images/image1.jpeg');
    imgContainer.style.opacity='1' 
    // opacity=1 transparency is completely visible
    pContainer.innerHTML= 'a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves. In some usages, the definition of a tree' 
})

img2.addEventListener('click',()=>{
    imgContainer.setAttribute('src','./images/image2.jpeg')
    imgContainer.style.opacity='1'
    pContainer.innerHTML= 'An airplane (American English), or aeroplane (Commonwealth English), informally plane, is a fixed-wing aircraft ' 
})

img3.addEventListener('click',()=>{
    imgContainer.setAttribute('src','./images/image3.jpeg')
    imgContainer.style.opacity='1'
    pContainer.innerHTML= 'Chocolate or cocoa is a food made from roasted and ground cacao seed kernels that is available as a liquid, solid, or paste' 
})

img4.addEventListener('click',()=>{
    imgContainer.setAttribute('src','./images/image4.png')
    imgContainer.style.opacity='1'
    pContainer.innerHTML= 'Fire is a rapid burning of combustible material in the presence of oxygen manifested as flames.' 
})


