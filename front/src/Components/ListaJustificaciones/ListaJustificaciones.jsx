import React, { useEffect, useState } from 'react';
import { getJustificaciones } from '../../Server/Crud/Crud';

const ListaJustificaciones = () => {
    const [justificaciones, setJustificaciones] = useState([]);

    const obtenerJustificaciones = async () => {
        try {
            const data = await getJustificaciones();
            setJustificaciones(data);
        } catch (error) {
            console.error("Error al obtener las justificaciones:", error);
        }
    };

    useEffect(() => {
        obtenerJustificaciones();
    }, []);

    return (
        <div className="lista_justificaciones">
            <h2>Justificaciones Disponibles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {justificaciones.map((just, index) => (
                    <div key={just.id || index}>
                        <strong>Descripción:</strong> {just.descripcion} <br />
                        <strong>Estado:</strong> {just.estado}
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default ListaJustificaciones;
