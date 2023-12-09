import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Cidades1 from '../../assets/img/cidades1.png'
import Cidades2 from '../../assets/img/cidades2.png'
import Cidades3 from '../../assets/img/cidades3.png'
import { Rating } from 'react-simple-star-rating'
import './styles.scss';

export default function SwiperOnlyImage({ title }) {
    const [swiperRef, setSwiperRef] = useState(null);


    // This is the sample data. Don't consider as main
    const SwiperContent = [
        Cidades1,
        Cidades2,
        Cidades3,
        Cidades1,
        Cidades2,
        Cidades3,
        Cidades1,
        Cidades2,
        Cidades3,
    ]

    const [rating, setRating] = useState(4)


    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <>
            <div className='swiper-full-container'>
                <h3>{title}</h3>
                <Swiper
                    // modules={[Virtual, Navigation, Pagination]}
                    // onSwiper={setSwiperRef}
                    loop={true}
                    // pagination={{
                    //   type: 'fraction',
                    // }}
                    // navigation={true}
                    // virtual
                    spaceBetween={10}

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 5,
                        },
                        1300: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {SwiperContent.map((item, index) => (
                        <SwiperSlide   >
                            <div >
                                <div >
                                    <img src={item} alt="title" />
                                 
                                </div>
                               
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>

        </>
    );
}
