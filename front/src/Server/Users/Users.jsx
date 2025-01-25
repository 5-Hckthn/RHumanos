const url = 'http://localhost:8000/users/'

const postUsers = async (newUser) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }
    const data = await response.json();
  } catch (error) {
    console.error('ERROR POST:', error);
  }
};

export { postUsers };