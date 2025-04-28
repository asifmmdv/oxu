const email = document.getElementById('email-input')
const password = document.getElementById('password-input')

function handleLogin(){
    const emailVal = email.value
    const passwordVal = password.value

    fetch("https://neptunbk.vercel.app/auth/login",{
        method : "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login : emailVal,
            password: passwordVal
        })
    }).then(res => res.json())
      .then(mel => {
        const { refresh,token,status } = mel

        if(status){
            localStorage.setItem("token", token)
            localStorage.setItem("status", status)
            location.href = "/admin/admin.html"
        }
      })
}

function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    location.href = "/index.html";
}