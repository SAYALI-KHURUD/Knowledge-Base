function num(val){
    document.getElementById("a").value += val ;
}
function solve(){
    var x= document.getElementById("a").value;
    try{
        var y = eval(x);
        document.getElementById("a").value=y;

    }catch(e){
        document.getElementById("a").value=error;
    }
    
}
function clearScreen(){
    document.getElementById("a").value= "";
}
