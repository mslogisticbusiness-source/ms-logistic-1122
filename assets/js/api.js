const API_URL = "https://ms-logistic-backend-1.onrender.com";

async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    options.headers["Authorization"] = "Bearer " + token;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(API_URL + endpoint, options);
  return response.json();
}
