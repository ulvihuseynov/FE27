// const openDropdown=document.querySelectorAll(".dropdown");
// const dropdownList=document.querySelectorAll(".dropdown-list")
// openDropdown.forEach(openItem=>{
//     openItem.addEventListener("click",()=>{
//        dropdownList.forEach(list=>{
//         list.style.display="block"
//         console.log('ulvi');
        
//        })
//      })
// })

// openItem.removeEventListener("click",()=>{
//     dropdownList.forEach(list=>{
//      list.style.display="block"
//      console.log('ulvi');
     
//     })
//   })

const openMenu=document.querySelector(".open-menu");
const mobileList=document.querySelector(".mobile-list")
openMenu.addEventListener("click",()=>{
mobileList.classList.toggle("toggle")
})