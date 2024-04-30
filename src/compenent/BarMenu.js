import * as React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';



import { afficherMenu } from '../api/apiProduct';
function BarMenu() {

    const [menu, setMenu] = React.useState([]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  

    React.useEffect(() => {
      const fetchMenu= async () => {
        const menu = await afficherMenu();
        setMenu(menu);
      };
  
      fetchMenu();
    }, []);

    
  return (
    <Grid    style={{ display: 'block' ,  }}  container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 3 }}>
   {menu.map((menuItem, index) => (
        <Grid   style={{ display: 'block' ,  width : 'auto'}}key={index} item xs={12} sm={6} md={3}>
          <Item> <img alt={menuItem.thumbnailUrl} width="100%" src={menuItem.url} /></Item>
        </Grid>
      ))}
  </Grid>
  )
}

export default BarMenu