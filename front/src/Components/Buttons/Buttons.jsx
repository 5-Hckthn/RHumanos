import React, { useState, useEffect } from 'react';
import './Buttons.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Buttons() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showResume, setShowResume] = useState(false);

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

    const handleStart = () => {
        setIsRunning(true);
        setShowResume(false);
        console.log(count);
        
        
    };

    const handlePause = () => {
        setIsRunning(false);
        setShowResume(true);
        console.log(count);

    };

    const handleResume = () => {
        setIsRunning(true);
        setShowResume(false);
        console.log(count);

    };

    // Calcular horas, minutos y segundos
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    // Formatear en `HH:MM:SS`
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className='containerModal'>
            <div><AccountCircleIcon style={{ color: 'black', fontSize: '60px' }} /></div>
            <h1>{formattedTime}</h1>
            <div className='buttons' style={{marginTop: '20px'}}>
            <button onClick={handleStart} disabled={isRunning || showResume}>
                Start
            </button>
            <button onClick={handlePause} disabled={!isRunning}>
                Pause
            </button>
            {showResume && (
                <button onClick={handleResume}>
                    Resume
                </button>
            )}
            </div>
        </div>
    );
}

export default Buttons;
