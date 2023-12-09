import React, { useState } from 'react'
import './styles.scss'
import Layout from '../../Layout'
import SearchBar from '../../components/SearchBar/searchBar'
import airBaloon from '../../assets/img/item-details-image.png'
import PaymentIcon from '@mui/icons-material/Payment';
import PixIcon from '@mui/icons-material/Pix';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import TimeLine from '../../assets/img/timeline.png'

import {
    TextField,
} from "@mui/material";
import QrCode from '../../assets/img/qr-testing.png'

const Purchasing = () => {


    const [steps, setSteps] = useState(0)


    return (
        <Layout>
            <div>
                <SearchBar />
            </div>
            <div className='purchasing-container'>
                <div style={{ gap: '20px', width: '65%', margin: '5px auto', paddingTop: '20px', paddingBottom: '20px' }}>
                    <h3>Revisão da Compra e Pagamento</h3>
                    <div className='my-4 '>
                        <div className='d-flex' style={{ gap: '20px', width: '100%', margin: 'auto' }}>
                            <img style={{ width: '250px', borderRadius: '10px' }} src={airBaloon} alt="" />
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'open sans' }}>
                                    Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário
                                </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Quantidade:</p>
                                    <h6 style={{ fontSize: '20px' }}>02</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Serviço adicional:</p>
                                    <h6 style={{ fontSize: '20px' }}>Base Jump de Balão - 600m</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Agendando para: </p>
                                    <h6 style={{ fontSize: '20px' }}> 01/07/2023 às 06:00</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Sub-total</p>
                                    <h6 style={{ fontSize: '20px' }}>R$ 999,70</h6>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: '100%', margin: '30px auto' }} />
                        <div className='d-flex' style={{ gap: '20px', width: '100%', margin: 'auto' }}>
                            <img style={{ width: '250px', borderRadius: '10px' }} src={airBaloon} alt="" />
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'open sans' }}>
                                    Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário
                                </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Quantidade:</p>
                                    <h6 style={{ fontSize: '20px' }}>02</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Serviço adicional:</p>
                                    <h6 style={{ fontSize: '20px' }}>Base Jump de Balão - 600m</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Agendando para: </p>
                                    <h6 style={{ fontSize: '20px' }}> 01/07/2023 às 06:00</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Sub-total</p>
                                    <h6 style={{ fontSize: '20px' }}>R$ 999,70</h6>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: '100%', margin: '30px auto' }} />
                        <div className='d-flex' style={{ gap: '20px', width: '100%', margin: 'auto' }}>
                            <img style={{ width: '250px', borderRadius: '10px' }} src={airBaloon} alt="" />
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'open sans' }}>
                                    Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário
                                </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Quantidade:</p>
                                    <h6 style={{ fontSize: '20px' }}>02</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Serviço adicional:</p>
                                    <h6 style={{ fontSize: '20px' }}>Base Jump de Balão - 600m</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Agendando para: </p>
                                    <h6 style={{ fontSize: '20px' }}> 01/07/2023 às 06:00</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p style={{ fontSize: '20px', fontWeight: "350" }}>Sub-total</p>
                                    <h6 style={{ fontSize: '20px' }}>R$ 999,70</h6>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: '100%', margin: '30px auto' }} />
                        <div className='d-flex col-12 justify-content-end'>
                            <div className='d-flex col-6 flex-column'>
                                <div className='d-flex align-items-center col-12 justify-content-between' >
                                    <div className='d-flex align-items-center' style={{ gap: '3px' }}><h3 className='m-0' style={{ fontWeight: '900', fontSize: "25px" }}>Total</h3><span style={{ fontSize: "20px" }}>(3)</span></div>
                                    <h3 className='m-0' style={{ fontWeight: '900', fontSize: "25px" }}>R$ 2.999,70</h3>
                                </div>

                                {
                                    steps === 0 &&
                                    <div className='mt-4'>
                                        <div className='d-flex align-items-center col-12 justify-content-between' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>
                                                    <PixIcon style={{ fontSize: '25px', color: 'gray' }} />
                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>PIX</p>
                                                </div>
                                                <div>
                                                    <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center col-12 justify-content-between mt-2' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>
                                                    <PaymentIcon style={{ fontSize: '30px', color: 'gray' }} />
                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>cartáo de crèdito</p>
                                                </div>
                                                <div>
                                                    <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex col-12 align-items-center mt-3 mx-2' style={{ gap: "8px" }}>
                                            <input type="checkbox" />
                                            <div style={{ color: 'gray' }}>
                                                Concordar com
                                                <b> Termos de Uso </b>
                                                e
                                                <b> Políticas de Privacidade</b>
                                            </div>
                                        </div>
                                        <div className='d-flex col-12 align-items-center mt-3 mx-2'>
                                            <button  onClick={()=>setSteps(1)} className='py-2' style={{ width: '100%', background: '#00CD9B', color: 'white', fontFamily: 'open sans', borderRadius: '5px' }}>
                                                CONCLUIR COMPRA
                                            </button>
                                        </div>
                                        
                                    </div>
                                }
                                {
                                    steps === 1 &&
                                    <div className='mt-4'>
                                        <div className='d-flex align-items-center col-12 justify-content-between' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>

                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>ALTERAR FORMA DE PAGAMENTO</p>
                                                </div>
                                                <div>
                                                    <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center col-12 justify-content-between mt-2' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>
                                                    <PaymentIcon style={{ fontSize: '30px', color: 'gray' }} />
                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>cartáo de crèdito</p>
                                                </div>
                                                <div>
                                                    <RemoveRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 my-2'>
                                            <TextField
                                                id="cc"
                                                variant="outlined"
                                                className="my-2"
                                                size="small"
                                                style={{ width: '100%', }}
                                                value="Nome"
                                            />
                                            <TextField
                                                id="cc"
                                                variant="outlined"
                                                className="my-2"
                                                size="small"
                                                style={{ width: '100%', }}
                                                value="Nome"
                                            />
                                            <TextField
                                                id="cc"
                                                variant="outlined"
                                                className=" my-2"
                                                size="small"
                                                style={{ width: '100%', }}
                                                value="Nome"
                                            />
                                            <div className='d-flex col-12' style={{ gap: '5px' }}>
                                                <TextField
                                                    id="cc"
                                                    variant="outlined"
                                                    className=" my-2"
                                                    size="small"
                                                    style={{ width: '100%', }}
                                                    value="Nome"
                                                />
                                                <TextField
                                                    id="cc"
                                                    variant="outlined"
                                                    className=" my-2"
                                                    size="small"
                                                    style={{ width: '100%', }}
                                                    value="Nome"
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex col-12 align-items-center mt-3 mx-2' style={{ gap: "8px" }}>
                                            <input type="checkbox" />
                                            <div style={{ color: 'gray' }}>
                                                <p className='m-0'>Guardar cartáo para as pròximas compras</p>
                                            </div>
                                        </div>
                                        <div className='d-flex col-12 align-items-center mt-3 mx-2' style={{ gap: "8px" }}>
                                            <input type="checkbox" />
                                            <div style={{ color: 'gray' }}>
                                                Concordar com
                                                <b> Termos de Uso </b>
                                                e
                                                <b> Políticas de Privacidade</b>
                                            </div>
                                        </div>
                                        <div className='d-flex col-12 align-items-center mt-3 mx-2'>
                                            <button onClick={()=>setSteps(2)} className='py-2' style={{ width: '100%', background: '#00CD9B', color: 'white', fontFamily: 'open sans', borderRadius: '5px' }}>
                                                CONCLUIR COMPRA
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    steps === 2 &&
                                    <div className='mt-4'>
                                        <div className='d-flex align-items-center col-12 justify-content-between' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>

                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>ALTERAR FORMA DE PAGAMENTO</p>
                                                </div>
                                                <div>
                                                    <ArrowDropDownRoundedIcon style={{ fontSize: '50px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center col-12 justify-content-between mt-2' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>
                                                    <PaymentIcon style={{ fontSize: '30px', color: 'gray' }} />
                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>PIX</p>
                                                </div>
                                                <div>
                                                    <RemoveRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 my-4'>
                                            <div >
                                                <span >
                                                    É simples e seguro:
                                                </span>
                                                <div>
                                                    <li className='my-3'>
                                                        1. Após finalizar compra, o código Pix ficará disponível para você pagar no Banco da sua escolha.
                                                    </li>
                                                    <li className='my-3'>
                                                        2. O tempo limite para você pagar é de 2 horas.
                                                    </li>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex col-12 align-items-center mt-3 mx-2'>
                                            <button onClick={()=>setSteps(3)} className='py-2' style={{ width: '100%', background: '#00CD9B', color: 'white', fontFamily: 'open sans', borderRadius: '5px' }}>
                                                CONCLUIR COMPRA
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    steps === 3 &&
                                    <div className='mt-4'>
                                        <div className='d-flex align-items-center col-12 justify-content-between' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>

                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>ALTERAR FORMA DE PAGAMENTO</p>
                                                </div>
                                                <div>
                                                    <ArrowDropDownRoundedIcon style={{ fontSize: '50px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center col-12 justify-content-between mt-2' >
                                            <div className='d-flex align-items-center col-12 justify-content-between'>
                                                <div className='d-flex align-items-center' style={{ gap: '2px' }}>
                                                    <PaymentIcon style={{ fontSize: '30px', color: 'gray' }} />
                                                    <p style={{ fontWeight: '300', color: 'gray', fontSize: '20px' }} className='m-0'>PIX</p>
                                                </div>
                                                <div>
                                                    <RemoveRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 my-4'>
                                            <p style={{ fontSize: '16px', fontWeight: '400', color: 'gray' }}>
                                                Não  perca  o  seu  pedido!  O  prazo para pagamento do pix é de 01:59:57
                                            </p>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img src={QrCode} alt="" />
                                            </div>
                                            <p style={{ fontSize: '16px', fontWeight: '400', color: 'gray' }}>
                                                Utilize o app do seu banco para escanear o QR Code ou copie o código PIX
                                            </p>

                                            <div className='d-flex col-12 justify-content-center align-items-center mt-3 mx-2'>
                                                <button className='py-2 col-6' style={{ background: '#323041', border: '1px solid #707070', color: 'white', fontFamily: 'open sans', borderRadius: '5px' }}>
                                                    Copiar código PIX
                                                </button>
                                            </div>
                                            <div style={{ margin: '20px auto' }} className='d-flex col-12 justify-content-center align-items-center  mx-2'>
                                                <img src={TimeLine} alt="progress" />
                                            </div>
                                            <div className='col-12'>
                                                <h6 style={{ textAlign: 'center', margin: '0px', marginTop: '4px', color: 'gray' }}>Aguardando <br /> pagamento</h6>
                                                <p style={{ textAlign: 'center', margin: '0px', marginTop: '4px', color: 'gray' }}>06/06/2023 às 10:10</p>
                                            </div>
                                            <div style={{ marginTop: '15px', color: 'gray' }}>
                                                <span>
                                                    Lembre-se  de  que você sempre poderá acessar todos os  detalhes  desta  e  de  outras  compras  na seção
                                                </span>
                                                <b> Histórico de Compras.</b>
                                            </div>
                                        </div>



                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Purchasing