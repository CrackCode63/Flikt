function showRegister(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("formTitle").innerText = "Register";
}

function showLogin(){
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("formTitle").innerText = "Login";
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    if(user === "" || pass === ""){
        alert("All fields are required");
        return;
    }

    if(pass.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login successful (demo)");
});

document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let cls = document.getElementById("className").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let cpass = document.getElementById("cpass").value.trim();

    if(fname === "" || lname === "" || cls === "" || phone === "" || pass === "" || cpass === ""){
        alert("All fields are required");
        return;
    }

    if(!/^\d{10}$/.test(phone)){
        alert("Phone number has only 10 digits");
        return;
    }

    if(pass.length < 6){
        alert("Password has only 6 characters");
        return;
    }

    if(pass !== cpass){
        alert("Passwords does not match");
        return;
    }

    alert("Registration successful.");
    showLogin();
});
