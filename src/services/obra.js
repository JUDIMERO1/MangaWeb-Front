const API_URL = 'http://localhost:8080'; // Ajusta esta URL si es necesario

export async function getObras() {
  const response = await fetch(`${API_URL}/obras`);
  if (!response.ok) {
    throw new Error('Failed to fetch obras');
  }
  return await response.json();
}
