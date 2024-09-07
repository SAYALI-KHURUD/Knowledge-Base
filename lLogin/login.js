function validate(){
    var username = document.getElementById("name");
    var password = document.getElementById("pass");
     if(username.value=="" || password.value=="")
      {
        alert("filed shuld be empty");
        return false;
     }else{
        true;
     }
    }