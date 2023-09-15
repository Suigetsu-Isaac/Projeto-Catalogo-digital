const menuBar = localStorage.getItem("menu-bar");
const {styles , elements} = JSON.parse(menuBar)
if(menuBar){
    var menu = document.querySelector("#menu-bar");
    var classtyle = ""
    for (var style in styles){
        classtyle += styles[style]+" "
    }
    menu.setAttribute("class",classtyle)
    menu.innerHTML += elements;

}else{
    alert("não temos o menu carregado")
}

