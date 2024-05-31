function clocker(){
    setInterval(function(){
    var DiaAtual = new Date()
    var HrAtual =  parseInt(DiaAtual.getHours()) 
    var MinAtual = DiaAtual.getMinutes()
    var navsfuso = document.getElementsByName("fuso")

    if (navsfuso[0].checked){
        HrAtual += 12

    }else if(navsfuso[1].checked){
        HrAtual += 2

    }else if(navsfuso[2].checked){
        HrAtual -= 4

    }else if(navsfuso[3].checked){
        HrAtual += 2

    }else{
        HrAtual += 0
    }
    if (HrAtual > 24){
        HrAtual -= 24
    }

    document.getElementById("divimg").animate(
        [
            {transform: `rotate(${(HrAtual  - 6) * 15}deg)`},
            {transform: `rotate(${(HrAtual  + 18) * 15}deg)`}

        ],
        {
            duration: 86400000,
            iterations: Infinity,
            easing: 'linear'
        }


    )
    if(HrAtual  < 18 && HrAtual  >= 6){
        document.getElementById("big").style.background = "#e0e0e0"
        document.getElementById("big").style.boxShadow = " 20px 20px 60px #696969, -20px -20px 60px #ffffff"
        document.getElementById("body").style.backgroundColor = "#e0e0e0"
        document.getElementById("mini").style.background = "#e0e0e0"
        document.getElementById("clockp").style.background = "#e0e0e0"
        document.getElementById("clockp").style.boxShadow = "  5px 5px 10px #656565 , -5px -5px 10px #ffffff"
        document.getElementById("clockH3").style.color  = "#0F0F0F"

        
    }if(HrAtual >= 18 || HrAtual < 6){
        document.getElementById("big").style.background = "#0F0F0F"
        document.getElementById("big").style.boxShadow = " 19px 19px 35px #0b0b0b,-19px -19px 35px #131313"
        document.getElementById("body").style.backgroundColor = "#0F0F0F"
        document.getElementById("mini").style.background = "#0F0F0F"
        document.getElementById("clockp").style.background = "#0F0F0F"
        document.getElementById("clockp").style.boxShadow = "5px 5px 10px #070707,-5px -5px 10px #171717"
        document.getElementById("clockH3").style.color  = "#e0e0e0"
    }
     document.getElementById("clockH3").innerHTML = HrAtual  + ":" + (MinAtual<10 ? "0" + MinAtual : MinAtual)
    }, 1000)
   
}