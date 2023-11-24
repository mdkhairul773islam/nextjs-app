async function verifyToken(token) {
  try {
    const response = await fetch('http://localhost:3000/api/auth/verifyToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.valid;
    }

    return false;
  } catch (error) {
    return false;
  }
}

export default verifyToken;