import { useEffect, useState } from 'react';
import { Card ,Image } from 'antd';
import './App.css';
import { afficherFilms } from './api/apiProduct';

import { Button } from '@mui/material';

function App() {
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
    <div className='image'>
    <Image
    width="100%"
    src="img.jpg"
    
  />
  
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
    
      <Button variant="contained" color="success">
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

export default App;
