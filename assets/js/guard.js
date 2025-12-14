(function(){
  const token = localStorage.getItem("token");
  if(!token && !location.pathname.includes("login")){
    window.location.href = "login.html";
  }
})();