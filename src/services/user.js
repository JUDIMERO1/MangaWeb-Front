const ENDPOINT = "http://localhost:8080"; // Cambiar a puerto donde corre tu backend

export async function register({ username, nombre, email, password }) {
  return fetch(`${ENDPOINT}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, nombre, email, password }),
  })
  .then((res) => {
    if (!res.ok) throw new Error("Response is not ok");
    return res.json();
  })
  .then((res) => {
    const { token } = res;
    return token;
  });
}

export async function login({ email, password }) {
  return fetch(`${ENDPOINT}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => {
    if (!res.ok) throw new Error("Invalid credentials");
    return res.json();
  })
  .then((res) => {
    const { token } = res;
    return token;
  });
}