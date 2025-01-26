import React, { useState, useEffect } from 'react';
import './Buttons.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { postJornada, updateJornada } from '../../Server/Crud/Crud';

function Buttons() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [jornadaID, setJornadaID] = useState(() => {
        // Recuperar jornadaID desde sessionStorage al cargar el componente
        return sessionStorage.getItem('jornadaID');
    });

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1); // Incrementar por segundos
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const handleStart = async () => {
        try {
            // const usuario_ID = localStorage.getItem('usuario_ID');
            // if (!usuario_ID) {
            //     console.error('No se encontró usuario_ID en localStorage');
            //     return;
            // }

            const jornadaData = {
                estado: 'Incompleta',
                fecha: new Date().toISOString().split('T')[0], // Fecha actual (YYYY-MM-DD)
                hora_inicio: new Date().toLocaleTimeString('es-ES', { hour12: false }), // Hora actual (HH:mm:ss)
                hora_salida: null,
                usuario: 1,
                justificacion: null,
            };

            const response = await postJornada(jornadaData);

            // Guardar jornadaID en sessionStorage
            sessionStorage.setItem('jornadaID', response.jornada_ID);
            setJornadaID(response.jornada_ID);

            console.log('Jornada registrada exitosamente:', response);

            setIsRunning(true);
            setShowResume(false);
        } catch (error) {
            console.error('Error al registrar la jornada:', error);
        }
    };

    const handleStop = async () => {
        try {
            if (!jornadaID) {
                console.error('No hay una jornada activa para actualizar');
                return;
            }

            const updateData = {
                hora_salida: new Date().toLocaleTimeString('es-ES', { hour12: false }), // Hora actual
            };

            await updateJornada(jornadaID, updateData);

            console.log('Jornada finalizada exitosamente');

            // Eliminar jornadaID de sessionStorage
            sessionStorage.removeItem('jornadaID');

            // Restablecer el estado
            setIsRunning(false);
            setShowResume(false);
            setCount(0);
            setJornadaID(null);
        } catch (error) {
            console.error('Error al finalizar la jornada:', error);
        }
    };

    const handlePause = () => {
        sessionStorage.setItem('jornada',count)
        setIsRunning(false);
        setShowResume(true);
    };

    const handleResume = () => {
        setIsRunning(true);
        setShowResume(false);
    };

    // Calcular horas, minutos y segundos
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    // Formatear en `HH:MM:SS`
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    useEffect(() => {
        // Recuperar el estado si hay una jornada activa
        if (jornadaID) {
            console.log('Recuperando jornada activa desde sessionStorage:', jornadaID);
            setIsRunning(true); // Opcional: puedes iniciar el contador si prefieres
        }
    }, [jornadaID]);

    return (
        <div className='containerModal'>
            <div><AccountCircleIcon style={{ color: 'black', fontSize: '60px' }} />
                <div>
                    <div className='nombre'>Nombre</div>
                </div>
            </div>
            <div>{formattedTime}</div>
            <div className='buttons' style={{ marginTop: '20px' }}>
                {!isRunning && !jornadaID && (
                    <button onClick={handleStart} className='buttonCount'>
                        <PlayArrowIcon />
                    </button>
                )}
                {isRunning && (
                    <button onClick={handlePause} className='buttonCount'>
                        <PauseIcon />
                    </button>
                )}
                {showResume && (
                    <button onClick={handleResume} className='buttonCount'>
                        Resume
                    </button>
                )}
                {jornadaID && isRunning && (
                    <button onClick={handleStop} className='buttonCount'>
                        <StopIcon />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Buttons;
