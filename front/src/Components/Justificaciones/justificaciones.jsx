import React, { useState } from 'react';
import { postJustificacion } from '../../Server/Crud/Crud'; // Asegúrate de tener esta función para hacer el POST


const JustificacionesForm = () => {
    const [formData, setFormData] = useState({
        descripcion: '', // Descripción de la justificación
        estado: '', // Estado de la justificación (Aprobada, Pendiente, Denegada)
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        const { descripcion, estado } = formData;

        if (!descripcion.trim()) newErrors.descripcion = 'Descripción is required.';
        if (!estado) newErrors.estado = 'Estado is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // El formulario es válido si no hay errores
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitJustificacion();
        }
    };

    const submitJustificacion = async () => {
        try {
            await postJustificacion(formData);  // Asegúrate de tener esta función para hacer el POST
            console.log('Justificación enviada:', formData);
            resetForm();
        } catch (error) {
            console.error('Error al enviar la justificación:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            descripcion: '',
            estado: '',
        });
        setErrors({});
    };

    return (
        <div className="container_div_jusForm">
            <h1 className="title_h1_jusForm">Formulario de Justificación</h1>
            <form className="form_jusForm" onSubmit={handleSubmit}>
                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    className="input_jusForm"
                />
                {errors.descripcion && <p style={{ color: 'red' }}>{errors.descripcion}</p>}

                <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="select_input_jusForm"
                >
                    <option value="" disabled>
                        Selecciona Estado
                    </option>
                    <option value="Aprobada">Aprobada</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Denegada">Denegada</option>
                </select>
                {errors.estado && <p style={{ color: 'red' }}>{errors.estado}</p>}

                <button type="submit">Enviar Justificación</button>
            </form>
        </div>
    );
};

export default JustificacionesForm;
