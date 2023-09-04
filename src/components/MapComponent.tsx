"use client"
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [showA, setShowA] = useState('');
  const [showC, setShowC] = useState('');

  useEffect(() => {
    const leafletMap:any = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap);
    setMap(leafletMap);
  }, []);

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        console.log(`Endereço Encontrado: ${display_name}`);
        console.log(`Coordenadas: Latitude ${lat}, Longitude ${lon}`);

        setShowA(display_name);
        setShowC(`${lat} and ${lon}`)
        setCoordinates({ lat, lon });

        map.setView([lat, lon], 14);
      } else {
        console.log('Endereço não encontrado');
        setCoordinates(null);
      }
    } catch (error) {
      console.error('Erro ao pesquisar o endereço:', error);
      setCoordinates(null);
    }
  };

  return (
    <div className="flex-column">
      <div className="w-1/2 p-4">
        <input
          type="text"
          placeholder="Digite o endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearchClick}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Pesquisar
          </button>

          <h1>{showA}</h1>
          <h1>{showC}</h1>
      </div>
      <div className="">
        <div id="map" style={{ width: '100%', height: '500px' }} />
      </div>
    </div>
  );
};

export default MapComponent;
