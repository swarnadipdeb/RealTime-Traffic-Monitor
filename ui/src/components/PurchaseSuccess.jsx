// PurchaseSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PurchaseSuccess() {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in">
        <div className="text-5xl mb-4 text-green-600">✅</div>
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          PURCHASE SUCCESSFUL
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase.
        </p>
        <Link to='/'>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go Back
        </button>
        </Link>
      </div>
    </div>
  );
}