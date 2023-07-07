let card = document.querySelectorAll(".card")
let btn = document.querySelector(".btn")

function gnerate() {
    let nums = "1234567890abcdef"
    let hex ="#"
        for (let  i= 0;  i< 6 ; i++) {
        let hexColor = Math.floor(Math.random() * nums.length)
        hex = hex + nums.substring(hexColor,hexColor +1)
        console.log(hex);
    }
    
    return hex
}

function styling() {
        card.forEach(e =>{
        let cardStyle = gnerate()
        e.style.backgroundColor= cardStyle
        e.innerHTML = gnerate() 
        
    })
}

btn.addEventListener("click" , styling)



