async function afficherFilms() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const films = await reponse.json();
    const filmsPourAlbum = films.filter(film => film.albumId === 1).slice(0, 30);

    console.log(filmsPourAlbum);
    return filmsPourAlbum;
    
  }

  export { afficherFilms };




  async function afficherMenu() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const films = await reponse.json();
    const filmsPourAlbum = films.filter(film => film.albumId === 1).slice(0, 5);

    console.log(filmsPourAlbum);
    return filmsPourAlbum;
    
  }

  export { afficherMenu };