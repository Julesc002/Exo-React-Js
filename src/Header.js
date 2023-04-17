import React from 'react';
import logo from './logo.svg';

function Header() {
    return (
      <header>
        <a className="lienImage" href="index.html">
          <img src={logo} alt="logo de l'application" className="logo" />
        </a>
        <nav>
          <a className="lienMenu" href="#Joueurs.php">
            Joueurs
          </a>
          <a className="lienMenu" href="#Matchs.php">
            Matchs
          </a>
          <a className="lienMenu" href="#Statistiques.php">
            Statistiques
          </a>
          <button className="btnMenu" type="button">
            Login
          </button>
        </nav>
      </header>
    );
}

export default Header;