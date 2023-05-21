let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat6 = document.getElementById("boat6")
let mountains7 = document.getElementById("mountains7")
let main = document.getElementById('main')

let hi = document.querySelector('.hi')

window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px' ;
    moon.style.top = value* 4 + 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value  + 'px'
    boat6.style.top = value + 'px'
    boat6.style.left = value*3 + 'px'
    hi.style.fontSize = value+ 'px'

    if(scrollY >= 67)
    {
        hi.style.fontSize = 67 + 'px' ;
        hi.style.position ='fixed' ;
        if(scrollY >= 400)
        {
            hi.style.display = "none"
        }else {
            hi.style.display = "block"
        }

        if(scrollY >=100){
            main.classList.add("dayColor") ;
            main.classList.remove("mainColor")
        }else{
            main.classList.remove("dayColor") ;
            main.classList.add("mainColor")
        }
    }

}
