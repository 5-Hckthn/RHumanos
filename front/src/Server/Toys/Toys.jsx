const getToys = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getUserById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

// const postToys = async (newToy) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newToy),
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

// const updateToys = async (id, updatedToy) => {
//   try {
//     const response = await fetch(`${url}${id}/`, {
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

// const deleteToys = async (id) => {
//   try {
//     const response = await fetch(`${url}${id}/`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Error en la solicitud DELETE');
//     }

//     console.log('Juguete eliminado con éxito');
//   } catch (error) {
//     console.error('ERROR DELETE:', error);
//   }
// };

// export { getToys, postToys, updateToys, deleteToys };