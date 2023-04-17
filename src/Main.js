import React from 'react';
import logo from './logo.svg';
import Cards from './Cards';
import CardsRandom from './CardsRandom';
import SearchBar from './SearchBar';

function Main() {
    return (
        <main>
            <article>
                <h1>Titre</h1>
                <img src={require('./ImgAccueil.png')} alt="image de quidditch" class="image"/>
                {/*ici je sais qu'il faudrait mettre le titre dans la section mais je ne le fais pas car cela me demande de revoir trop en profondeur le css. Cependant j'y penserais pour les prochaines pages !*/}
                <h1 class="titreSection">Card top 6 API</h1>
                <Cards />
                <h1 class="titreSection">Tire cards random</h1>
                <CardsRandom />
                <SearchBar />
                <img src={logo} alt="logo de l'application" class="logoAnime"/>
            </article>
		</main>
    );
}

export default Main;