



const header= document.querySelector(".header")
const main= document.querySelector(".main")
const footer= document.querySelector(".footer")
const menu= document.querySelector("menu")
const links= document.querySelector(".nav__list")

function choiceDark(){
header.style.background="grey"
header.style.transition="0.3s ease-out 0.5s"
main.style.background="lightgrey"
main.style.transition="0.3s ease-out 0.5s"
footer.style.background="grey"
footer.style.transition="0.3s ease-out 0.5s"
menu.style.transition="lightgrey"
menu.style.transition="0.3s ease-out 0.5s"
links.forEach((el)=>{
    el.style.color= "blue"
    el.style.transition = "0.3s ease-out 0.5s"
})
}
logo.forEach((el) => {
    el.style.color= "lightgray"
    el.style.transition
})
localStorage.setItem("bg-color" , "black")
localStorage.setItem('link-color' ,'blue')

function choiceLight(){
    header.style.background="green"
    header.style.transition="0.3s ease-out 0.5s"
    main.style.background="lightgrey"
    main.style.transition="0.3s ease-out 0.5s"
    footer.style.background="purple"
    footer.style.transition="0.3s ease-out 0.5s"
    }

    links.forEach((el)=> {
        el.style.color = " "
        el.style.transition = "0.3s ease-out 0.5s"
    })
    logo.forEach((el) => {
        el.style.color = " "
        el.style.transition = "0.3s ease-out 0.5s"
    })
    localStorage.setItem("bg-color","White")
    localStorage.setItem("link-color", "black")