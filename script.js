

setInterval(()=>{
    let hh = document.querySelector(".hh")
    let mm = document.querySelector(".mm")
    let ss = document.querySelector(".ss")

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(h < 10){
        h = "0" + h
    }
    if(m < 10){
        m = "0" + m
    }
    if(s < 10){
        s = "0" + s
    }
    
    
    hh.innerHTML = h ;
    mm.innerHTML = m ;
    ss.innerHTML = s ;
    
})
