// assets/js/guard.js

(function () {
  const token = localStorage.getItem("ms_token");
  if (!token) {
    window.location.href = "login.html";
  }
})();
