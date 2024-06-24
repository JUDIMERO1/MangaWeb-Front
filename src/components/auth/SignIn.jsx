import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/user';
import Routers from '../../helper/Routers';

const SignIn = () => {
  const { handleLogin } = useUser();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    mail: '',
    password: ''
  });
  
  const { mail, password } = datos;

  const onchange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
  
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await handleLogin({ email: mail, password });
      localStorage.setItem('user', JSON.stringify({ email: mail, token }));
      navigate(Routers.home);
    } catch (error) {
      alert('Login failed');
    }
  };
  
  return (
    <div className='content-login'>
      <div className='content-form'>
        <form onSubmit={onsubmit} autoComplete="off">
          <p className='logo'><b>MangaWeb</b><i></i></p>
          <p className='acceder'>Acceder</p>
          <Link to={Routers.home}>Ir a Lector Manga</Link>
          <div className='input'>
            <label htmlFor='mail'>Email</label>
            <input
              type='mail'
              name='mail'
              id='mail'
              placeholder='Correo electronico'
              value={mail}
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
          <a className='recuperar-contraseña' href='/'>¿Olvidaste la Contraseña?</a>
          <div className='link-footer'>
            <Link to={Routers.logUp} className='logup'>Crear cuenta</Link>
            <input type='submit' value='Acceder' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
