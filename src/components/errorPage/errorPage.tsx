import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Page Not Found</p>
        <p className="mt-6 text-lg text-gray-500">
          Whoops! Looks like you ended up on a bad{' '}
          <span className="line-through">click</span> link.{' '}
         </p>
        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
