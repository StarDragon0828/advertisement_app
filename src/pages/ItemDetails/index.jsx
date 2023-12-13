import React, { useEffect } from 'react'
import './styles.scss'
import Layout from "../../Layout/index";
import Swiper from '../../components/Swiper'
import SwiperFullWidth from '../../components/SwiperFullWidth';
import SwiperOnlyImage from '../../components/SwiperOnlyImage'
import Star from '../../assets/img/star.png'
import {
    FormControl,
    FormControlLabel,
    Checkbox,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    FormLabel,
    RadioGroup,
    Radio,
} from "@mui/material";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TodayIcon from '@mui/icons-material/Today';
import ItemsDetailSample from '../../assets/img/item-detail-sample.png'
import ItemDetailImage from '../../assets/img/item-details-image.png'
import SearchBar from '../../components/SearchBar/searchBar';
import { Link } from 'react-router-dom';

const ItemDetails = () => {
    const handleNExt=()=>{
      window.location.href = "/checkout"
    }

    useEffect(() => {
      window.addEventListener("click", handleNExt);
      return () => {
        window.removeEventListener("click", handleNExt);
      };
    });
    

    const tabContent = ["Litoral SC", "Cânions", "Serra RS", "Serra SC", "Floripa", "Praia", "Rosa Norte", "Praia ", "Rosa Norte", "Praia"]


    return (
        <Layout>

            <div className='explore-container'>

                <SearchBar></SearchBar>


                <div className=' d-flex tab-container justify-content-around flex-wrap tab-container' style={{ marginTop: '40px' }}>
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

                {/* <div className='my-4 col-12'>
                    <Swiper></Swiper>
                </div> */}
                <div className='item-detail-container'>
                    <div className='d-flex align-items-center footPath'>
                        <p>turismointeligente</p>
                        <p>s</p>
                        <p>Cânions</p>
                        <p>s</p>
                        <p>Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às 6:00 am.</p>
                    </div>
                    <h3 className='item-detail-title'>Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário</h3>
                    <div className='d-flex col-12 item-detail-flex-container'>
                        <div className="wrapper">
                            <div className="image-gallery">
                                <aside className="thumbnails">
                                    <a href="#" className="selected thumbnail" data-big={`url(${ItemDetailImage})`}>
                                        <div className="thumbnail-image" style={{ backgroundImage: `url(${ItemDetailImage})` }} />
                                    </a>
                                    <a href="#" className="thumbnail" data-big={`url(${ItemDetailImage})`}>
                                        <div className="thumbnail-image" style={{ backgroundImage: `url(${ItemDetailImage})` }} />
                                    </a>
                                    <a href="#" className="thumbnail" data-big={`url(${ItemDetailImage})`}>
                                        <div className="thumbnail-image" style={{ backgroundImage: `url(${ItemDetailImage})` }} />
                                    </a>
                                    <a href="#" className="thumbnail" data-big={`url(${ItemDetailImage})`}>
                                        <div className="thumbnail-image" style={{ backgroundImage: `url(${ItemDetailImage})` }} />
                                    </a>
                                    <a href="#" className="thumbnail" data-big={`url(${ItemDetailImage})`}>
                                        <div className="thumbnail-image" style={{ backgroundImage: `url(${ItemDetailImage})` }} />
                                    </a>
                                </aside>
                                <main className="primary" style={{ backgroundImage: `url(${ItemDetailImage})`, backgroundSize:"95%", backgroundColor:"white" }} />
                            </div>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between col-11'>
                                <div >
                                    <div className='d-flex align-items-center' style={{ gap: '10px' }}>
                                        <img src={Star} alt="star" style={{ width: '80px' }} />
                                        <div>
                                            <h4 style={{ marginBottom: '0px', fontWeight: '500' }}>5.0</h4>
                                            <p style={{ margin: '0px', fontWeight: '500' }}>(1217)</p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '20px', letterSpacing: '1.5px' }}>Avaliar serviço</p>
                                </div>
                                <div>
                                    <div className='d-flex' style={{ gap: '15px' }}>
                                        <PublicIcon />
                                        <TwitterIcon />
                                        <FacebookIcon />
                                        <WhatsAppIcon />
                                        <InstagramIcon />
                                        <LocalPhoneIcon />
                                    </div>
                                    <div className='d-flex align-items-center mt-1' style={{ gap: '20px' }}>
                                        <img src={ItemsDetailSample} alt="" />
                                        <div>
                                            <h5 className='m-0' style={{ fontSize: '15px' }}>AirTripAdventureSC</h5>
                                            <p className='m-0' style={{ fontSize: '15px' }}>Voos de Balões</p>
                                            <p className='m-0' style={{ fontSize: '15px' }}>Praia Grande - SC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center' style={{ gap: '20px' }}>

                                <TextField
                                    id="cc"
                                    variant="outlined"
                                    className="txt"
                                    size="small"
                                    style={{ width: '70px', textAlign: 'center' }}
                                    value="1 hora"
                                />
                                <TextField
                                    id="cc"
                                    variant="outlined"
                                    className="txt"
                                    size="small"
                                    style={{ width: '80px', textAlign: 'center' }}
                                    value="2 horas"
                                />
                                <TextField
                                    id="cc"
                                    variant="outlined"
                                    className="txt"
                                    size="small"
                                    style={{ width: '80px', textAlign: 'center' }}
                                    value="3 horas"
                                />
                                <FormControl fullWidth className="gender">
                                    <InputLabel id=" Sexta-feira - 6:00  R$299,90" size="small">
                                        Sexta-feira - 6:00  R$299,90
                                    </InputLabel>
                                    <Select
                                        labelId=" Sexta-feira - 6:00  R$299,90"
                                        id="demo-simple-select"
                                        label="Gênero"
                                        size="small"
                                        className="selectbox"
                                    >
                                        <MenuItem value={10}>10 horas</MenuItem>
                                        <MenuItem value={20}>20 horas</MenuItem>
                                        <MenuItem value={30}>30 horas</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>

                            <div className='d-flex align-items-center' style={{ gap: '10px', marginTop: '10px' }}>
                                <h4 style={{ fontWeight: '400', fontFamily: "open sans" }}>R$299,90 </h4>
                                <p style={{ fontSize: '15px', fontFamily: 'open sans' }}>por pessoa. Consulte valores especiais para grupos  turísticos. Entre em contato para tirar todas as suas dúvidas sobre pacotes nossos voos diários.</p>
                            </div>
                            <div>
                                <p style={{ fontFamily: 'open sans', marginTop: '10px' }}>Voos diários. Consulte horários disponíveis. Entre em contato para tirar suas dúvidas e consultar valores. Agende seu voo com antecedência.</p>
                            </div>
                            <div className='d-flex align-items-center col-11 justify-content-between'>
                                <h6 style={{ fontSize: '25px', fontWeight: '350' }}>Quantidade</h6>
                                <h3>-</h3>
                            </div>
                            <div className='d-flex align-items-center col-11 justify-content-between'>
                                <div className='d-flex align-items-center col-2'>
                                    <span>-</span>
                                    <TextField
                                        id="cc"
                                        variant="outlined"
                                        className="txt"
                                        size="small"
                                        style={{ width: '70px', textAlign: 'center', position: 'relative', margin: '0px' }}
                                        value="3"
                                    />
                                    <span>+</span>
                                </div>
                                <h6 style={{ fontWeight: '500', fontFamily: 'open sans', fontSize: '20px' }}>R$599,80</h6>
                            </div>

                            <div className='d-flex align-items-center col-11 justify-content-between'>
                                <h6 style={{ fontSize: '25px', fontWeight: '350' }}>Serviços Adicionais</h6>
                                <h3>-</h3>
                            </div>
                            <div className='d-flex col-11 align-items-center justify-content-between'>
                                <div className='d-flex align-items-center' style={{ gap: '10px' }}>
                                    <input type="checkbox" style={{ height: '20px', width: '20px' }} />
                                    <p style={{ margin: '0px' }}>Base Jump de Balão - 600m </p>
                                </div>
                                <p>
                                    + R$ 199,90
                                </p>
                            </div>
                            <hr className='col-11 my-0 mb-2' />
                            <div className='d-flex col-11 align-items-center justify-content-between'>
                                <div className='d-flex align-items-center' style={{ gap: '10px' }}>
                                    <input type="checkbox" style={{ height: '20px', width: '20px' }} />
                                    <p style={{ margin: '0px' }}>Base Jump de Balão - 600m </p>
                                </div>
                                <p>
                                    + R$ 199,90
                                </p>
                            </div>
                            <div>
                                <div className='d-flex align-items-center justify-content-between col-11 mt-2'>
                                    <p>
                                        Agendar data: <br />
                                        (consulte informações sobre reagendamento)
                                    </p>
                                    <h4>
                                        <TodayIcon />
                                    </h4>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between col-11 mt-2'>
                                <h4>Subtotal</h4>
                                <h4>R$999,60</h4>
                            </div>

                            <div className='col-11 d-flex align-items-center justify-content-between greenBorderContainer mt-2'>
                                
                                <div className='d-flex align-items-center col-6 justify-content-between item-detail-first-cart' >
                                <Link to="/checkout" className='d-flex align-items-center col-12 justify-content-between '>
                                    <ShoppingCartIcon />
                                    <p style={{ fontFamily: 'open sans', margin: '0px' }}>ADICIONAR AO CARRINHO</p>
                                    </Link>
                                </div>
                            
                               
                                &nbsp;
                                <div className='d-flex align-items-center col-6 justify-content-between greenColor'>
                                    <p style={{ fontFamily: 'open sans', margin: '0px' }}>COMPRAR AGORA</p>
                                    <BookOnlineIcon />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-12' style={{ margin: '30px auto', textAlign: 'center', border: '1px solid lightgray', borderRadius: '10px' }}>
                        <p style={{ margin: "10px auto" }}>
                            Ver descrição completa
                        </p>

                    </div>
                    <div className='my-4 col-12'>
                        <Swiper></Swiper>
                    </div>
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

export default ItemDetails