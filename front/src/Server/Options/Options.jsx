const url = 'http://localhost:8000/'



/// Server/Options/Options.js
export const fetchRoles = async () => {
    const response = await fetch(url+'roles/');
    const data = await response.json();
    return data;
  };
  
  export const fetchPuestos = async () => {
    const response = await fetch(url+'puestos/');
    const data = await response.json();
    return data;
  };
  