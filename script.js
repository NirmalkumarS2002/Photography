

let arrowbtn=document.querySelector(".arrowdown1")
let page=document.querySelector(".pages")

arrowbtn.addEventListener("click",(e)=>{
    e.preventDefault()

    if(page.style.display==="flex"){
          page.style.display="none"
    }
    else{
        page.style.display="flex"
    }
})


let arrowbtn2=document.querySelector(".arrowdown2")
let contactlink=document.querySelector(".contactlink")

arrowbtn2.addEventListener("click",(e)=>{
    e.preventDefault()

    if(contactlink.style.display==="flex"){
          contactlink.style.display="none"
    }
    else{
        contactlink.style.display="flex"
    }
})

//toggle button


let toggle=document.querySelector(".toggle")
let nav=document.querySelector("nav")
let close1=document.querySelector(".close")

toggle.addEventListener("click",()=>{

    toggle.style.display="none"
    close1.style.display="block"
    nav.style.display="flex"
      page.style.display="none"
    contactlink.style.display="none"

})

close1.addEventListener("click",()=>{

    toggle.style.display="block"
    close1.style.display="none"
    nav.style.display="none"
    page.style.display="none"
    contactlink.style.display="none"

})


window.addEventListener("resize",()=>{



    if(innerWidth>1050){
         close1.style.display="none"     
         toggle.style.display="none"
         nav.style.display="flex"
    }
    else{
        close1.style.display="none"     
         toggle.style.display="block"
         nav.style.display="none"
         

    }
})


// hero section

let heroimg=document.querySelector(".hero-section")
let image=["./src/cam.png","./src/cam2.png","./src/home.webp"]
let index=0
let contents=document.querySelectorAll(".hero-content")

setInterval(()=>{
    index++
    if(index>=image.length){
        index=0
    }
    
    heroimg.style.backgroundImage=`url(${image[index]})`

    // contents.forEach((items)=>{
    //     items.classList.remove("active")
    // })
    //     contents[index]=classList.add("active")
        contents.forEach((item)=>{

        item.classList.remove("active");
    });


    contents[index].classList.add("active");

},3000)



let leftArrow=document.querySelector(".leftArrow")

leftArrow.addEventListener("click",()=>{
    index++
    if(index>=image.length){
        index=0
    }
    heroimg.style.backgroundImage=`url(${image[index]})`
})


let rightArrow=document.querySelector(".rightArrow")
rightArrow.addEventListener("click",()=>{

     index--
    if(index<0){
        index=image.length-1
    }
    heroimg.style.backgroundImage=`url(${image[index]})`

})

