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