function verify(){
    const token = localStorage.getItem("token") 
    const status = localStorage.getItem("status") 
 
    if(!token || !status){
     window.location.href="/auth/login.html"
    }
    else{
     fetch ("https://neptunbk.vercel.app/auth/verify-token",{
         headers:{
             "Authorization" : `Bearer ${token}`
         }
     }).then(res => res.json())
       .then(info => console.log(info))
    }
 }