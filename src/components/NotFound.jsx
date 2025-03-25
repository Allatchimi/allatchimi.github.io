// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-100 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Retour à l'accueil 1
      </Link>
    </div>
  );
};

export default NotFound;