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
    <div style = {{position : 'fixed' , zIndex: 1  }} >
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
        style={{      width: '197px' , borderRadius: '13px', height: '721px' }}
      >
        {menu.map((menuItem, index) => (
          <SwiperSlide key={index} >
            <Item>
              <img alt={menuItem.thumbnailUrl} width="100%" src={menuItem.url} />
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default BarMenu;
