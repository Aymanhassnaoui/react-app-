import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { afficherMenu } from '../api/apiProduct';
import { Pagination } from 'swiper/modules';


function BarMenu() {
  const [menu, setMenu] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
 
  }));

  useEffect(() => {
    const fetchMenu = async () => {
      const menuData = await afficherMenu();
      setMenu(menuData);
    };

    fetchMenu();
  }, []);

  return (
    <>
     <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}

        slidesPerView={3}
      
        centeredSlides={true}
        initialSlide={2}
        modules={[Pagination]}
        className="mySwiper"
        style={{      width: '197px' , borderRadius: '13px', height: '721px', background: 'rgb(35,77,78) linear-gradient(0deg, rgba(35,77,78,1) 14%, rgba(59,59,62,1) 45%, rgba(0,0,0,1) 97%)' }}
      >
        {menu.map((menuItem, index) => (
          <SwiperSlide key={index} >
            <Item>
              <img alt={menuItem.thumbnailUrl} width="100%" src={menuItem.url} />
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </>

  );
}

export default BarMenu;
