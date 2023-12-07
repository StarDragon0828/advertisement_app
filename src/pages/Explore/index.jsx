import React from 'react'
import './styles.scss'
import Layout from "../../Layout/index";
import Swiper from '../../components/Swiper'
import SwiperFullWidth from '../../components/SwiperFullWidth';
import SwiperOnlyImage from '../../components/SwiperOnlyImage'
import SearchBar from '../../components/SearchBar/searchBar';


const Explore = () => {

    const tabContent = ["Litoral SC", "Cânions", "Serra RS", "Serra SC", "Floripa", "Praia", "Rosa Norte", "Praia ", "Rosa Norte", "Praia"]


    return (
        <Layout>

            <div className='explore-container'>
            <SearchBar></SearchBar>

                <div className=' d-flex tab-container justify-content-around flex-wrap tab-container' style={{marginTop:'40px'}}>
                    {
                        tabContent.map((item, i) => {
                            return (
                                <div className='tab-inner-box'>
                                    <button>
                                        {item}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='my-4 col-12'>
                    <Swiper></Swiper>
                </div>
                <div className='my-4 col-12'>
                    <SwiperOnlyImage></SwiperOnlyImage>
                </div>

                <div>
                    <SwiperFullWidth title="Cânions"></SwiperFullWidth>
                </div>
                <br />
                <div>
                    <SwiperFullWidth title="Restaurantes"></SwiperFullWidth>
                </div>
                <br />
                <div>
                    <SwiperFullWidth title="Aventuras"></SwiperFullWidth>
                </div>
                <br />
                <br />
            </div>
        </Layout>
    )
}

export default Explore