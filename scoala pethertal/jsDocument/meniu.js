let k=0;
let qqq=0;
window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll >= 140 && k==0) {
        document.getElementById("meniu").style.position="fixed";
        for(i=1;i<=4;i++){
            document.getElementById("bt"+i).style.backgroundColor="rgba(225, 225, 225, 0.9)";
        }
        if(qqq==0){
            document.getElementById("bt5").style.backgroundColor="rgba(225, 225, 225, 0.9)";
        }
        k=1;
    }else{
        if(scroll <= 140 && k==1){
            document.getElementById("meniu").style.position="static";
            for(i=1;i<=4;i++){
                document.getElementById("bt"+i).style.backgroundColor="white";
            }
            if(qqq==0){
                document.getElementById("bt5").style.backgroundColor="white";
            }
            k=0;
        }
    }
});
function deschide(){
    if(qqq==0){
        document.getElementById("adm").style.height="300%";
        document.getElementById("bt5").style.backgroundColor="rgb(82, 37, 0)";
        document.getElementById("pp").style.color="white";
        qqq++;
    }else{
        document.getElementById("adm").style.height="0";
        if(k==0){
            document.getElementById("bt5").style.backgroundColor="white";
        }else{
            document.getElementById("bt5").style.backgroundColor="rgba(225, 225, 225, 0.9)";
        }
        document.getElementById("pp").style.color="rgb(82, 37, 0)";
        qqq--;
    }
    
};