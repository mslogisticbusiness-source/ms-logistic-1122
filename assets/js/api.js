const API_URL = "https://ms-logistic-backend.onrender.com";

async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" }
  };
  if (token) options.headers["Authorization"] = "Bearer " + token;
  if (data) options.body = JSON.stringify(data);
  const res = await fetch(API_URL + endpoint, options);
  return res.json();
}
