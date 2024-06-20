const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="about-site">
          <h2>Sitio</h2>
          <a>Sobre MangaWeb</a>
          
        </div>
        <div className="explore">
          <h2>Explorar</h2>
          <a>Biblioteca</a>
          <a>Grupos</a>
          <a>Listas</a>
        </div>
        <div className="footer-content">
          <h2>Contenidos</h2>
          <p>
            MangaWeb fue creada por 3 desocupados que literalmete pensaron que si hiban a pasar web con esto tan ilusos           </p>
          <p>
            This site is protected by reCAPTCHA and the Google <a>Privacy Policy </a>
            and <a>Terms of Service</a> apply.
          </p>
          <h2>Social</h2>
          <span style={{background: '#4a77ef', padding: 10, width: 40, textAlign: 'center', marginBottom: 16}}>F</span>
          <p>&copy; 2024 - 2024 MangaWeb - F31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
