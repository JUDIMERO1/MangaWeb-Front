import React, { useState } from "react";
import { Link } from "react-router-dom";
import Routers from "../../helper/Routers";


import useAlert from "../../hooks/useAlert";
import useUser from "../../hooks/useUser";
import Alert from "../Layout/Alert";

const SignUp = () => {
  const { alert, setAlert } = useAlert();
  const { isLoginLoading, codeError, register } = useUser();
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
    confirmacion: "",
  });

  const { name, email, password, confirmacion } = datos;

  const onchange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      setAlert(true);
    }

    register({ name, email, password });
  };
  return (
    <>
      <div className="content-login">
        <div className="content-form">
          <form onSubmit={onsubmit} autoComplete="off">
            <p className="logo">
              <b>MangaWeb</b>
              <i></i>
            </p>
            <p className="acceder">Crear tu cuenta de Manga</p>
            <Link to={Routers.home}>Ir a Lector Manga</Link>
            <div className="input">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre completo"
                value={name}
                onChange={onchange}
              />
            </div>

            <div className="input">
              <label htmlFor="email">Eemail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electronico"
                value={email}
                onChange={onchange}
              />
            </div>

            <div className="contra">
              <div className="input">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={onchange}
                />
              </div>
              <div className="input">
                <label htmlFor="confirmacion">Confirmación</label>
                <input
                  type="password"
                  name="confirmacion"
                  id="confirmacion"
                  placeholder="Confirmar contraseña"
                  value={confirmacion}
                  onChange={onchange}
                />
              </div>
            </div>
            <p>
              haga lo que quiera pero que no se le olvide la contraseña, gracias por su atención
            </p>
            <div className="link-footer">
              <Link to={Routers.login} className="logup">
                Acceder a tu cuenta
              </Link>
              <input type="submit" value="Crear" />
            </div>
            {alert && <Alert msg={"Todos los campos son obligatorios"} />}
            {isLoginLoading && <Alert msg={"Validando credenciales..."} />}
            {codeError === 400 && (
              <Alert msg={"El email ya está conectado a otra cuenta"} />
            )}
            {codeError === 200 && (
              <Alert msg={"El usuario fue creado exitosamente"} />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
