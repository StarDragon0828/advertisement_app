import React, { useState } from 'react'
import './styles.scss'
import Layout from '../../Layout'
import SearchBar from '../../components/SearchBar/searchBar'
import airBaloon from '../../assets/img/item-details-image.png'
import SwiperCard from '../../components/Swiper'
import SwiperFullWidth from '../../components/SwiperFullWidth'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import QrCode from '../../assets/img/qr-testing.png'


const ConfirmPayment = () => {

    const [dialogBoxState, setDialogBoxState] = useState(0)


    const dataLength = [1, 2, 3]


    return (
        <Layout>
            <div>
                <SearchBar />
            </div>
            <div className='purchasing-container'>
                <div style={{ gap: '20px', width: '65%', margin: '5px auto', paddingTop: '20px', paddingBottom: '20px' }}>
                    <h3>Confirmação de Pagamento</h3>
                    <p style={{ fontSize: '25px', fontWeight: '350' }}>Sua compra foi efetuada com sucesso! Confira abaixo os detalhes dos seus pedidos.</p>
                    <p></p>
                    <div className='my-4 '>
                        {
                            dataLength.map((item, i) => (
                                <div>
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
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p style={{ fontSize: '20px', fontWeight: "350" }}>Código do Cupom</p>
                                                <h6 style={{ fontSize: '20px' }}>123456789A</h6>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='d-flex align-items-center justify-content-center' style={{ cursor: 'pointer' }} onClick={() => i == dialogBoxState ? setDialogBoxState(null) : setDialogBoxState(i)} >
                                        <p className='m-0'>Detalhes</p>
                                        <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                                    </div>

                                    {
                                        i === dialogBoxState &&
                                        <div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5 >QR Code para validação do cupom </h5>
                                                <p>(apresente este QR Code ao utilizar o serviço):</p>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img src={QrCode} alt="" />
                                            </div>
                                            <div>
                                                <p>
                                                    Reagendamentos devem ser efetuados com pelo menos 48 horas de antecedência. Por favor, entre em contato uma hora antes do voo para confirmar decolagem.
                                                </p>
                                                <h5>Resumo Financeiro:</h5>
                                                <div>
                                                    <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                                                        <p className='m-0'>Valor do Passaporte:  </p>
                                                        <h6 className='m-0'>R$ 299,90</h6>
                                                    </div>
                                                    <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                                                        <p className='m-0'>Valor do Serviço Adicional:</p>
                                                        <h6 className='m-0'> R$ 199,90</h6>
                                                    </div>
                                                    <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                                                        <p className='m-0'>Quantidade:</p>
                                                        <h6 className='m-0'> 02</h6>
                                                    </div>
                                                    <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                                                        <p className='m-0'>Total:</p>
                                                        <h6 className='m-0'>  R$ 799,70</h6>
                                                    </div>
                                                    <p className='mt-2'>A transação foi realizada com sucesso no seu cartão de crédito.</p>
                                                </div>
                                                <div>
                                                    <h5>Instruções para Uso do Cupom:</h5>
                                                    <p>Na hora de utilizar o serviço, informe o Código do Cupom, nome completo, CPF, email ou apresente o QR Code para um funcionário da AirTripAdventureSC.</p>
                                                    <p className='mt-1'>Esta confirmação é necessária para verificar sua identidade e validar o cupom. Você poderá acessar estas informações a qualquer momento na seção "Histórico de Compras" do nosso site.</p>
                                                </div>
                                                <div>
                                                    <h5>Informações do Responsável pelo Serviço:</h5>
                                                    <div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>
                                                            <span>Nome:</span>
                                                            <span>AirTripAdventureSC</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>
                                                            <span>Categoria Principal:</span>
                                                            <span>Voo de Balões</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>
                                                            <span>Endereço:</span>
                                                            <span>Rua das Alamedas, 01, Centro, Praia Grande-SC. 99999-000</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>

                                                            <span>Praia Grande-SC. 99999-000</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>
                                                            <span>Telefones:</span>
                                                            <span>48 99999-9999 e 48 98888-8888</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "4px", fontSize: '15px' }}>
                                                            <span>Email:</span>
                                                            <span>airtrip@airtrip.com</span>
                                                        </div>



                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <p>
                                                        Todas as informações de sua compra foram enviadas para o seu e-mail para que você possa acessá-las quando precisar. Se você não receber o e-mail em sua caixa de entrada, por favor, verifique a sua pasta de spam ou lixo eletrônico. Além disso, lembre-se de que você sempre poderá acessar todos os detalhes desta e de outras compras na seção "Histórico de Compras".
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {
                                        i !== dataLength.length - 1 &&
                                        <hr style={{ width: '100%', margin: '30px auto', marginTop: '10px' }} />
                                    }


                                </div>
                            ))
                        }








                        {/* <div className='d-flex' style={{ gap: '20px', width: '100%', margin: 'auto' }}>
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
                        <div className='d-flex align-items-center justify-content-center'>
                            <p className='m-0'>Detalhes</p>
                            <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                        </div>
                        <hr style={{ width: '100%', margin: '30px auto', marginTop: '10px' }} />
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
                        <div className='d-flex align-items-center justify-content-center'>
                            <p className='m-0'>Detalhes</p>
                            <ArrowDropDownRoundedIcon style={{ fontSize: '40px', color: 'gray' }} />
                        </div>
                        <hr style={{ width: '100%', margin: '30px auto', marginTop: '10px' }} /> */}

                    </div>
                </div>
            </div>
            <div>
                <SwiperCard></SwiperCard>
            </div>
            <div style={{ margin: '30px auto' }}>
                <SwiperFullWidth></SwiperFullWidth>
            </div>
        </Layout>
    )
}

export default ConfirmPayment