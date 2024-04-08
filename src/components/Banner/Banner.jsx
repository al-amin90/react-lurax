import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import sli1 from '../../assets/sli1 (1).jpg'
import sli2 from '../../assets/sli1 (7).jpg'
import sli3 from '../../assets/sli1 (8).jpg'

const Banner = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('./bannerImg.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])


    return (
        <div className='min-h-[calc(100vh-96px)] '>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    images.map(i => <SwiperSlide key={i.id}>
                        <div className='relative'>
                            {/* <div className='w-full absolute bg-black h-[calc(100vh-101px)]'>sds</div> */}
                            <img className='min-w-full bg-cover bg-no-repeat object-cover h-[20rem] md:h-[calc(100vh-96px)]  opacity-90' src={i.image} alt="" />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner;