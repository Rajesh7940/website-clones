let occ=document.getElementsByClassName("occordition");
for(var i=0;i<occ.length;i++){
    occ[i].addEventListener("click", function (){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight +"px";
        }
    })
}