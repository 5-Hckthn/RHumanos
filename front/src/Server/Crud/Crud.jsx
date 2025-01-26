const url = 'http://localhost:8000/users/'

const urlRol = 'http://localhost:8000/roles/'

const urlPuestos = 'http://localhost:8000/puestos/'

const getUsersCrud = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

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
//////////////////////////////////////////////////////////////////////////////

export { getUsersCrud, getUserById, getRoleById, getAllPuestos }


// const postToys = async (newToy) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: newToy.name, price: newToy.price })

//     });
//     if (!response.ok) {
//       throw new Error('Error en la solicitud POST');
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('ERROR POST:', error);
//   }
// };
// ////////////////////////////////////////////////////////////////////////////


// const updateToys = async (id, updatedToy) => {
//   try {
//     const response = await fetch(url + id + '/', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedToy),
//     });

//     if (!response.ok) {
//       throw new Error('Error en la solicitud PUT');
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('ERROR PUT:', error);
//   }
// };
// // updateToy(1, { name: 'New Toy Name', description: 'Updated description' });
// ////////////////////////////////////////////////////////////////////////////



// const deleteToys = async (id) => {
//   try {
//     const response = await fetch(url + id + '/', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) {
//       throw new Error('Error en la solicitud DELETE');
//     }
//     console.log('User deleted successfully');
//   } catch (error) {
//     console.error('ERROR DELETE:', error);
//   }
// };
// // deleteToy(1);  Elimina el juguete con ID 1
// ////////////////////////////////////////////////////////////////////////////
