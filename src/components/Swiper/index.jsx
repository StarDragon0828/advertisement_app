// import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import React, { useState } from 'react'
import AirBaloon from '../../assets/img/air_baloon.png'
import Cafe from '../../assets/img/cafe.png'
import { Rating } from 'react-simple-star-rating'
import './styles.scss'

const SwiperCard = () => {


    const [rating, setRating] = useState(4)


    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    // This is the sample data. Don't consider as main
    const SwiperContent = [
        {
            image: AirBaloon,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: Cafe,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: AirBaloon,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: Cafe,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: AirBaloon,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: Cafe,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: AirBaloon,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        },
        {
            image: Cafe,
            imageName: "Praia Grande",
            firstDescription: "Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às...",
            secondDesciptionBold: "R$299,90",
            secondDesciptionNormal: "por pessoa. Consulte valores especiais para grupos...",
            thirdDesciption: "Voos diários. Consulte horários disponíveis. Entre em contato para...",
            fourDescription1: "por",
            fourDescription2: "AirTripAdventure"
        }
    ]



    return (
        <div>
            <Swiper
                // modules={[Navigation,  Scrollbar, A11y ]}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    1300: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 4,
                    },
                    1700: {
                        slidesPerView: 5,
                    },
                }}
                className="live-auction pt10 wow fadeInUp"
                // navigation
                centeredSlides={true}
                loop={true}
            >
                {
                    SwiperContent.map((item, i) => (
                        <SwiperSlide >
                            <div className='card-container'>
                                <div className='imageContainer'>
                                    <img style={{ width: '100%' }} src={item.image} alt={item.imageName} />
                                    <p className='imageText'>{item.imageName}</p>
                                </div>
                                <div className='pt-2 pb-1 px-2'>
                                    <div className='d-flex align-items-center pb-1'>
                                        <Rating size={18} onClick={handleRating} initialValue={rating} />
                                        <span className='px-1' style={{ fontSize: "10px", fontWeight: '500' }}>1217</span>
                                    </div>
                                    <div>
                                        <p className='first-description'>{item.firstDescription}</p>
                                        <div>
                                            <b>{item.secondDesciptionBold}</b><span className='second-description'>
                                                &nbsp;{item.secondDesciptionNormal}
                                            </span>
                                        </div>
                                        <p>{item.thirdDesciption}</p>
                                        <p>
                                            <span className='por-font'>{item.fourDescription1}</span>
                                            &nbsp;{item.fourDescription2}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>
    )
}

export default SwiperCard