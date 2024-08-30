
const searchContainer=document.querySelector(".search-container")

searchContainer.addEventListener("click",()=>{
    const searchBox=document.querySelector(".search-box")
    searchBox.style.top="50%"
    searchBox.style.left="50%"
    const body=document.querySelector("body")
    body.style.backgroundColor="black"
    // body.classList.add("blurred")
})