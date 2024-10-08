import React, { useState, useEffect } from 'react';

const ServerStatus = () => {
  // Definiujemy stany dla uptime, dxp i dxpDuration
  const [uptime, setUptime] = useState('');
  const [dxp, setDxp] = useState([]);
  const [dxpDuration, setDxpDuration] = useState('');

  // Używamy useEffect do wykonania pobierania danych po załadowaniu komponentu
  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await fetch('/api/status'); // Endpoint do uzyskania statusu
        const data = await response.json(); // Parsowanie odpowiedzi

        // Aktualizujemy stany na podstawie danych z API
        setUptime(`Uptime: ${data.uptime}`);

        const firstElement = data.dxp[0] || 'no DXP';
        const secondElement = data.dxp[1] || '';
        setDxp([firstElement, secondElement]);

        const thirdElement = data.dxp[2];
        const dxpInMinutes = Math.floor(thirdElement / 60000);
        setDxpDuration(`DXP Duration: ${dxpInMinutes}m`);
      } catch (error) {
        console.error('Error fetching status:', error); // Obsługa błędów
      }
    };

    getStatus(); // Wywołaj funkcję pobierania statusu
  }, []); // Pusta tablica oznacza, że efekt zostanie wykonany tylko raz, przy montowaniu komponentu

  return (
    <div className="w-full max-w-sm bg-gray-500 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
      <h5 className="mb-3 text-white font-bold text-2xl">Server Status</h5>
      <p className="mb-2 font-normal text-white">Status:</p>
      <p className="mb-2 font-normal text-white">{uptime}</p>
      <p className="mb-2 font-normal text-white">
        DXP: {dxp[0]} {dxp[1]}
      </p>
      <p className="mb-6 font-normal text-white">{dxpDuration}</p>
      <div className="flex justify-center">
        <a href="https://cfx.re/join/2epova" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 mt-2">
          Join Server
        </a>
      </div>
    </div>
  );
};

export default ServerStatus;
