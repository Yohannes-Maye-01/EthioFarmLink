// src/routes/login.tsx
import React, { useState } from 'react';
import { Form, Link } from '@remix-run/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example form validation
    if (!email || !password) {
      setErrorMessage('Both fields are required!');
      return;
    }

    // You would add your login logic here (API request, authentication)
    // For now, let's just log the credentials
    console.log('Login attempt:', { email, password });

    // Reset error message if credentials are valid
    setErrorMessage('');
    
    // Redirect or perform login actions here
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-sm">
      <h1 className="text-3xl font-bold text-center mb-6">Login to FarmLink</h1>
      
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <Form method="post" onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mt-2"
            required
            placeholder="Your email"
          />
        </div>

      

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>
        </div>
      </Form>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
