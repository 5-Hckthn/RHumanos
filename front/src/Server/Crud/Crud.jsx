const url = 'http://localhost:8000/users/'

const urlRol = 'http://localhost:8000/roles/'

const urlPuestos = 'http://localhost:8000/puestos/'

const urlJustificaciones = 'http://localhost:8000/justificaciones/'

const getUsersCrud = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const datUsers_API = "http://localhost:8000/users/";

export async function dataUsersGET() {
  try {
    const response = await fetch(datUsers_API);
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }
    const data = await response.json();
    console.log(data, data.id);
    for (const i in data) {
        return data[i]
      }
    
  } catch (error) {
    console.error("Error en dataUsersGET:", error);
    throw error;
  }
}

const getUserById = async (id) => {
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getRoleById = async (id) => {
  try {
    const response = await fetch(`${urlRol}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getAllPuestos = async () => {
  try {
    const response = await fetch(`${urlPuestos}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const postJustificacion = async (justificacionData) => {
  try {
    const response = await fetch(`${urlJustificaciones}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(justificacionData),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la justificación');
    }

    const data = await response.json();
    console.log('Justificación enviada exitosamente', data);
    return data;
  } catch (error) {
    console.error('Error al enviar la justificación:', error);
    throw error;  // Re-lanzamos el error para manejarlo en el componente si es necesario
  }
};

const getJustificaciones = async () => {
  try {
    const response = await fetch(urlJustificaciones);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
//////////////////////////////////////////////////////////////////////////////

export { getUsersCrud, getUserById, getRoleById, getAllPuestos, postJustificacion, getJustificaciones };

