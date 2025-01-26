import React, { useState } from 'react';
import './JustificacionesTabs.css';
import JustificacionesForm from '../../Components/Justificaciones/justificaciones';
import ListaJustificaciones from '../../Components/ListaJustificaciones/ListaJustificaciones';

const JustificacionesTabs = () => {
    const [activeTab, setActiveTab] = useState('crear');

    return (
        <div className="container_tabs">
            <div className="tabs_header">
                <button
                    className={`tab_button ${activeTab === 'crear' ? 'active_tab' : ''}`}
                    onClick={() => setActiveTab('crear')}
                >
                    Crear Justificación
                </button>
                <button
                    className={`tab_button ${activeTab === 'ver' ? 'active_tab' : ''}`}
                    onClick={() => setActiveTab('ver')}
                >
                    Ver Justificaciones
                </button>
            </div>
            <div className="tabs_content">
                {activeTab === 'crear' && <JustificacionesForm />}
                {activeTab === 'ver' && <ListaJustificaciones />}
            </div>
        </div>
    );
};

export default JustificacionesTabs;
