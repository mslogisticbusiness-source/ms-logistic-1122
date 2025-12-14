async function loginUser(email, password){
  const res = await apiRequest("/login", "POST", { email, password });
  if(res.token){
    localStorage.setItem("token", res.token);
    window.location.href = "dashboard.html";
  }else{
    alert("Login failed");
  }
}
function logoutUser(){
  localStorage.removeItem("token");
  window.location.href = "login.html";
}
