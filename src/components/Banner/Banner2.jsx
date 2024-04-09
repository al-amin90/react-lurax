import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner2 = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('./bannerImg.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='h-[20rem] -z-10 md:min-h-[calc(100vh-96px)] '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
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

export default Banner2;