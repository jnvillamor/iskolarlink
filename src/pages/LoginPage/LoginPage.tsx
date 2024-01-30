import { useState } from 'react';

const LoginPage = () => {
  return (
    <>
      <div>
        <h1>Register</h1>
        <div>
          <label htmlFor='email'>Email</label> <br />
          <input type='text' name='email' id='email' className='border border-black'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label> <br />
          <input type='password' name='password' id='password' className='border border-black' />
        </div>
        <button className='border p-3 bg-slate-400'>Register</button>
      </div>
    </>
  );
};

export default LoginPage;
