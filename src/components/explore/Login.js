import React from 'react';

const Login = () => {
  return (
    <form  action="http://172.0.16.125/php/ethoshackphp/SAFAR/php/users/userlogin.php" method="post" className="container mx-auto mt-10 max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input name='email' type="email" className="form-input mt-1 block w-full" id="email" placeholder="Email" required />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input name='password' type="password" className="form-input mt-1 block w-full" id="password" placeholder="Password" required />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;