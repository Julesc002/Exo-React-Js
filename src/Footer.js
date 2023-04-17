import React from 'react';
import logo from './logo.svg';

function Footer() {
    return (
        <footer>
        <div class="footerContent">
            <img src={logo} alt="logo de l'application" class="logo"/>
            <div class="divLiensFooter">
                <h4>Lorem</h4>
                <a class="lienFooter" href="#Joueurs.php">Joueurs</a>
                <a class="lienFooter" href="#Matchs.php">Matchs</a>
            </div>
            <div class="divLiensFooter">
                <h4>Lorem</h4>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
            </div>
            <div class="divLiensFooter">
                <h4>Lorem</h4>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
                <a class="lienFooter" href="#Lorem.php">lorem</a>
            </div>
        </div>
        <h1 class="copyright">Copyright 2023</h1>
    </footer>
    );
}

export default Footer;