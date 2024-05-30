function on(){
    var body = document.getElementById("body")
    var button = document.getElementById("button")
    var img = document.getElementById("imgs")

    button.style.boxShadow = "inset 20px 20px 40px #060606 , inset -20px -20px 40px #181818"
    
    setTimeout(function() {
        button.style.boxShadow = "inset 8px 8px 16px #cdcdcd , inset -8px -8px 16px #ffffff"
        body.style.backgroundColor = "#EEEEEE"
        button.style.backgroundColor = "#EEEEEE"
        
        
        img.src = "poweron.png"

        button.removeEventListener('click',on)
        button.addEventListener('click',off)




    },100);
    


    
}
function off(){
    var body = document.getElementById("body")
    var button = document.getElementById("button")
    var img = document.getElementById("imgs")
    button.style.boxShadow = " 20px 20px 40px #646464,-20px -20px 40px #ffffff"

    setTimeout(function() {
       button.style.boxShadow = " 20px 20px 40px #060606, -20px -20px 40px #181818"
       body.style.backgroundColor = "#0F0F0F"
       button.style.backgroundColor = "#0F0F0F"
       
        
        img.src = "poweroff4.png"

        button.removeEventListener('click',off)
        button.addEventListener('click',on)



    },100);
      

}