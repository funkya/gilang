
function Login() {
       
        var username = document.getElementById('username').value;
        username=username.toLowerCase();
        var password = document.getElementById('password').value;
        password=password.toLowerCase();

         if (username=="admin" && password=="admin"){
           alert("Selamat datang admin");
            
            
            }
            else{
            alert("User name dan password anda salah!");
            }

        
}



  
