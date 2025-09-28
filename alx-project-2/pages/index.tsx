// pages/index.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        Welcome to alx-project-2!
      </h1>
      <p className="text-xl text-gray-700">
        Next.js Project Setup is Complete.
      </p>
    </div>
  );
};

export default HomePage;