const ENDPOINT = "http://localhost:4000";

export default function user({ name, email, password }) {
  return fetch(`${ENDPOINT}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password, role: '0' }),
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