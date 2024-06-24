import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/user';
import routers from '../../helper/Routers';

const Header = () => {
  const { user, handleLogout } = useUser();

  const logout = () => {
    handleLogout();
  };

  return (
    <header className="container">
      <nav className="navbar">
        <div className="main-menu">
          <Link to={routers.home}>
            <b>mangaWeb</b>
            <i></i>
          </Link>
          <Link to={routers.library}>biblioteca</Link>
          <Link to={routers.groups}>grupos</Link>
        </div>
        <div className="main-menu">
          <form autoComplete="off">
            <div>
              <input type="search" placeholder="Buscar..." name="q" id="q" />
            </div>
          </form>
          {user ? (
            <>
              <Link to={routers.profile}>Usuario</Link>
              <button onClick={logout} className="logout-button">Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to={routers.login}>acceder</Link>
              <Link to={routers.logUp}>registrar</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
