import React from 'react';

const ListaJustificaciones = () => {
    const justificaciones = [
        { id: 1, descripcion: 'Primera justificación', estado: 'Aprobada' },
        { id: 2, descripcion: 'Segunda justificación', estado: 'Pendiente' },
        { id: 3, descripcion: 'Tercera justificación', estado: 'Denegada' },
    ];

    return (
        <div className="lista_justificaciones">
            <h2>Justificaciones Disponibles</h2>
            <ul>
                {justificaciones.map((just) => (
                    <li key={just.id}>
                        <strong>Descripción:</strong> {just.descripcion} <br />
                        <strong>Estado:</strong> {just.estado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaJustificaciones;
