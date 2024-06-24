import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/user';
import Routers from '../../helper/Routers';

const SignUp = () => {
  const { handleRegister } = useUser();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    username: '',
    nombre: '',
    email: '',
    password: ''
  });
  
  const { username, nombre, email, password } = datos;

  const onchange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
  
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await handleRegister({ username, nombre, email, password });
      localStorage.setItem('user', JSON.stringify({ email, token }));
      navigate(Routers.home);
    } catch (error) {
      alert('Registration failed');
    }
  };
  
  return (
    <div className='content-login'>
      <div className='content-form'>
        <form onSubmit={onsubmit} autoComplete="off">
          <p className='logo'><b>MangaWeb</b><i></i></p>
          <p className='acceder'>Crear cuenta</p>
          <div className='input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              value={username}
              onChange={onchange}
            />
          </div>
          <div className='input'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Nombre'
              value={nombre}
              onChange={onchange}
            />
          </div>
          <div className='input'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Correo electronico'
              value={email}
              onChange={onchange}
            />
          </div>
          <div className='input'>
            <label htmlFor='password'>Contraseña</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Contraseña'
              value={password}
              onChange={onchange}
            />
          </div>
          <div className='link-footer'>
            <Link to={Routers.login} className='login'>Ya tengo cuenta</Link>
            <input type='submit' value='Crear cuenta' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
