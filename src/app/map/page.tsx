"use client"
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import React from "react";


const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

function MapPage() {
    useEffect(() => {
        // Você pode usar o objeto window aqui, pois este código é executado no lado do cliente.
        // Certifique-se de colocar qualquer código que dependa do window dentro do useEffect ou outras funções.
    }, []);

    return (
        <div>
            <p>Example Map</p>
            <MapComponent />
        </div>
    );
}

export default MapPage;
