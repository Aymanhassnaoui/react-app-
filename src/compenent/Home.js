import { useEffect, useState } from 'react';
import { Card ,Image } from 'antd';
import {Img} from 'react-image'
import '../App.css';
import { afficherFilms } from '../api/apiProduct';



import { Button } from '@mui/material';
import BarMenu from '../compenent/BarMenu';
import { Link } from 'react-router-dom';



function Home(props) {
  const [filmsPourAlbum, setFilmsPourAlbum] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const films = await afficherFilms();
      setFilmsPourAlbum(films);
    };

    fetchFilms();
  }, []);

  return (
<>

<BarMenu />

    <div className='image'>
   
    <Img src="img.jpg" alt="logo"  style= {{ width : "100%"}} /> 
    </div>
    <div className='panier'>
   <Img  src="ajouter-un-panier.png" alt="panier"    style={{ position: 'absolute', top: '10px', right: '10px'     ,width: '40px' }}   />
   <Button
  style={{ borderRadius:'10px', position: 'absolute', top: '13px', right: '54px', color: 'white', backgroundColor: 'blue' }}
  type="primary"
>
  <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Voir Mon Panier</Link>
</Button>
  </div>

 
    <div className="App">
      <div className='ayman'>
      {filmsPourAlbum.map(film => (
        <Card key={film.id} style={{ width: 300 }} >
          <div className="custom-image">
          <Image alt={film.thumbnailUrl} width="100%" src={film.url} />
          </div>
          <div className="custom-card">
            <h3>{film.title}</h3>
            <p>{film.title}</p>
    
      <Button  onClick={props.onButtonClick} variant="contained" color="success">
        add
      </Button>
      
  
          </div>
        </Card>
      ))}
</div>
   </div>


  
   </>
  );
}

export default Home;
