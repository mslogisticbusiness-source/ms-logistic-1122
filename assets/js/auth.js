// assets/js/auth.js

async function login(email, password) {
  try {
    let res;

    // Try /auth/login first
    try {
      res = await apiRequest("/auth/login", "POST", { email, password });
    } catch (e) {
      // Fallback to /login
      res = await apiRequest("/login", "POST", { email, password });
    }

    if (res && res.token) {
      localStorage.setItem("ms_token", res.token);
      localStorage.setItem("ms_user", JSON.stringify(res.user || {}));
      window.location.href = "dashboard.html";
    } else {
      alert("Login failed");
    }

  } catch (err) {
    alert("Invalid email or password");
    console.error(err);
  }
}

function logout() {
  localStorage.removeItem("ms_token");
  localStorage.removeItem("ms_user");
  window.location.href = "login.html";
}
