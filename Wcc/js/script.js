var home = document.querySelectorAll(".home");
var ambony = document.querySelector(".ambony");
var n = home.length;

ambony.style.opacity="1";
var w = window.innerWidth;

ambony.children.item("0").children.item("1").innerHTML="Home";

if(w <1024 && w>930){
    ambony.style.transform="translateY(0%) translateX(-260%)";  
} else if(w>1024 && w<1180){
    ambony.style.transform="translateY(0%) translateX(-260%)";
}else if(w<=930 ){
    ambony.style.width="40%"
    ambony.style.transform="translateY(0px) translateX(-170%)"; 
}else if(w>1024){
    ambony.style.transform="translateY(0px) translateX(-260%)";
}

function hover(tab){
    for(var i=0 ; i<n ; i++){
            if(i==0){
                tab[i].addEventListener("mouseover" , ()=>{
                    
                    
                })
                tab[i].addEventListener("mouseleave" , ()=>{
   
                })
            }else if(i==1){
                tab[i].addEventListener("mouseover" , ()=>{

                    ambony.style.animation="courses 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Learn our best practices";
                });
                tab[i].addEventListener("mouseleave" , ()=>{
                    ambony.style.animation="reset1 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Home";
                })
            }else if(i==2){
                tab[i].addEventListener("mouseover" , ()=>{
                    ambony.style.animation="blog 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Find out the news";
                });
                tab[i].addEventListener("mouseleave" , ()=>{
                    ambony.style.animation="reset2 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Home";
                })
            }else if(i==3){
                tab[i].addEventListener("mouseover" , ()=>{
                    ambony.style.animation="pricing 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Benefit from our current promotions";
                });
                tab[i].addEventListener("mouseleave" , ()=>{
                    ambony.style.animation="reset3 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Home";
                })
            }else if(i==4){
                tab[i].addEventListener("mouseover" , ()=>{
                    ambony.style.animation="sign 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Use your potential to your advantage";
                });
                tab[i].addEventListener("mouseleave" , ()=>{
                    ambony.style.animation="reset4 0.4s ease-in-out forwards"
                    ambony.children.item("0").children.item("1").innerHTML="Home";
                })
            }
    }

}

hover(home)

/* btn-ripple xD*/

var btn_ripple= document.querySelectorAll(".ripple");
btn_ripple.forEach(btn =>{
    btn.addEventListener("click" , function(e){
        var x = e.clientX - e.target.offsetLeft;
        var y = e.clientY - e.target.offsetTop;

        var ripples = document.createElement("spanxD")
        ripples.style.left= x + "px";
        ripples.style.top= y + "px";
        this.appendChild(ripples);
        setTimeout(()=>{
            ripples.remove();
        },1000)
    })
})

/*fin btn-ripple xD */
