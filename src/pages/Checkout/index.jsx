import React from 'react'
import './styles.scss'
import Layout from '../../Layout'
import Swiper from '../../components/Swiper'
import airbaloon from '../../assets/img/item-details-image.png'
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

import TodayIcon from '@mui/icons-material/Today';
import SearchBar from '../../components/SearchBar/searchBar'

const index = () => {
    return (
        <Layout>
            <div>
                <SearchBar></SearchBar>
            </div>
            <div>
                <Swiper title="Aproveite e compre também"></Swiper>
            </div>
            <div className='checkout-container'>
                <div className='checkout-inner-container'>
                    <h2>Carrinho de Compras</h2>
                    <div className='col-12 checkout-table' >
                        <table>
                            <thead className='checkout-table-heading col-12'>
                                <th></th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                            </thead>
                        </table>
                        <div className='mt-2 d-flex justify-content-between' style={{ gap: '30px' }}>
                            <div className='d-flex' style={{ gap: '20px' }}>
                                <img style={{ width: '200px', borderRadius: '15px' }} src={airbaloon} alt="" />

                                <div>
                                    <p style={{ textAlign: 'right', margin: '0px' }}>Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário</p>
                                    <p style={{ textAlign: 'right', margin: '0px', fontSize: '12px' }}>por AirTripAdventureSC</p>

                                    <div className='d-flex align-items-center justify-content-between' style={{ gap: '10px', marginTop: '20px' }}>
                                        <FormControl style={{ width: '100px' }} >
                                            <InputLabel id="1 hora" size="small">
                                                1 hora
                                            </InputLabel>
                                            <Select
                                                labelId="1 hora"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ width: '100px' }}
                                            >
                                                <MenuItem value={10}>10 horas</MenuItem>
                                                <MenuItem value={20}>20 horas</MenuItem>
                                                <MenuItem value={30}>30 horas</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl >
                                            <InputLabel style={{ fontWeight: '700' }} id="Sexta-feira - 7:00" size="small">
                                                Sexta-feira - 7:00
                                            </InputLabel>
                                            <Select
                                                labelId="Sexta-feira - 7:00"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ fontWeight: '700', width: '500px' }}
                                            >
                                                <MenuItem value={10}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={20}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={30}>Sexta-feira - 7:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <p style={{ fontSize: '20px', fontWeight: '300' }}>
                                            serviços adicionais:
                                        </p>

                                    </div>
                                    <div className='d-flex align-items-center' style={{ gap: '10px', marginTop: '20px' }}>
                                        <p>Agendado para:</p>
                                        <div className='d-flex'>
                                            <TodayIcon />
                                            <p>05/07/202</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ width: '600px' }}>
                                <div className='d-flex align-items-center justify-content-between col-11'>
                                    <div className='d-flex align-items-center ' style={{ gap: '10px' }}>
                                        <h3>-</h3>
                                        <TextField
                                            id="cc"
                                            variant="outlined"
                                            className="txt"
                                            size="small"
                                            style={{ width: '40px', textAlign: 'center' }}
                                            value="3"
                                        />
                                        <h3>+</h3>
                                    </div>
                                    <div>
                                        <p>R$599,80</p>
                                    </div>
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

                                <div className='d-flex align-items-center justify-content-between col-11 mt-2'>
                                    <h5>Subtotal</h5>
                                    <h5>R$999,60</h5>
                                </div>

                            </div>
                        </div>
                        <hr />

                        <div className='mt-2 d-flex justify-content-between' style={{ gap: '30px' }}>
                            <div className='d-flex' style={{ gap: '20px' }}>
                                <img style={{ width: '200px', borderRadius: '15px' }} src={airbaloon} alt="" />

                                <div>
                                    <p style={{ textAlign: 'right', margin: '0px' }}>Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário</p>
                                    <p style={{ textAlign: 'right', margin: '0px', fontSize: '12px' }}>por AirTripAdventureSC</p>

                                    <div className='d-flex align-items-center justify-content-between' style={{ gap: '10px', marginTop: '20px' }}>
                                        <FormControl style={{ width: '100px' }} >
                                            <InputLabel id="1 hora" size="small">
                                                1 hora
                                            </InputLabel>
                                            <Select
                                                labelId="1 hora"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ width: '100px' }}
                                            >
                                                <MenuItem value={10}>10 horas</MenuItem>
                                                <MenuItem value={20}>20 horas</MenuItem>
                                                <MenuItem value={30}>30 horas</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl >
                                            <InputLabel style={{ fontWeight: '700' }} id="Sexta-feira - 7:00" size="small">
                                                Sexta-feira - 7:00
                                            </InputLabel>
                                            <Select
                                                labelId="Sexta-feira - 7:00"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ fontWeight: '700', width: '500px' }}
                                            >
                                                <MenuItem value={10}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={20}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={30}>Sexta-feira - 7:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <p style={{ fontSize: '20px', fontWeight: '300' }}>
                                            serviços adicionais:
                                        </p>

                                    </div>
                                    <div className='d-flex align-items-center' style={{ gap: '10px', marginTop: '20px' }}>
                                        <p>Agendado para:</p>
                                        <div className='d-flex'>
                                            <TodayIcon />
                                            <p>05/07/202</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ width: '600px' }}>
                                <div className='d-flex align-items-center justify-content-between col-11'>
                                    <div className='d-flex align-items-center ' style={{ gap: '10px' }}>
                                        <h3>-</h3>
                                        <TextField
                                            id="cc"
                                            variant="outlined"
                                            className="txt"
                                            size="small"
                                            style={{ width: '40px', textAlign: 'center' }}
                                            value="3"
                                        />
                                        <h3>+</h3>
                                    </div>
                                    <div>
                                        <p>R$599,80</p>
                                    </div>
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

                                <div className='d-flex align-items-center justify-content-between col-11 mt-2'>
                                    <h5>Subtotal</h5>
                                    <h5>R$999,60</h5>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className='mt-2 d-flex justify-content-between' style={{ gap: '30px' }}>
                            <div className='d-flex' style={{ gap: '20px' }}>
                                <img style={{ width: '200px', borderRadius: '15px' }} src={airbaloon} alt="" />

                                <div>
                                    <p style={{ textAlign: 'right', margin: '0px' }}>Voo de Balão pelos Cânions de SC e RS. Diariamente às 6:00 am. Vagas limitadas. Agende seu horário</p>
                                    <p style={{ textAlign: 'right', margin: '0px', fontSize: '12px' }}>por AirTripAdventureSC</p>

                                    <div className='d-flex align-items-center justify-content-between' style={{ gap: '10px', marginTop: '20px' }}>
                                        <FormControl style={{ width: '100px' }} >
                                            <InputLabel id="1 hora" size="small">
                                                1 hora
                                            </InputLabel>
                                            <Select
                                                labelId="1 hora"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ width: '100px' }}
                                            >
                                                <MenuItem value={10}>10 horas</MenuItem>
                                                <MenuItem value={20}>20 horas</MenuItem>
                                                <MenuItem value={30}>30 horas</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl >
                                            <InputLabel style={{ fontWeight: '700' }} id="Sexta-feira - 7:00" size="small">
                                                Sexta-feira - 7:00
                                            </InputLabel>
                                            <Select
                                                labelId="Sexta-feira - 7:00"
                                                id="demo-simple-select"
                                                label="Gênero"
                                                size="small"
                                                className="selectbox"
                                                style={{ fontWeight: '700', width: '500px' }}
                                            >
                                                <MenuItem value={10}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={20}>Sexta-feira - 7:00</MenuItem>
                                                <MenuItem value={30}>Sexta-feira - 7:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <p style={{ fontSize: '20px', fontWeight: '300' }}>
                                            serviços adicionais:
                                        </p>

                                    </div>
                                    <div className='d-flex align-items-center' style={{ gap: '10px', marginTop: '20px' }}>
                                        <p>Agendado para:</p>
                                        <div className='d-flex'>
                                            <TodayIcon />
                                            <p>05/07/202</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ width: '600px' }}>
                                <div className='d-flex align-items-center justify-content-between col-11'>
                                    <div className='d-flex align-items-center ' style={{ gap: '10px' }}>
                                        <h3>-</h3>
                                        <TextField
                                            id="cc"
                                            variant="outlined"
                                            className="txt"
                                            size="small"
                                            style={{ width: '40px', textAlign: 'center' }}
                                            value="3"
                                        />
                                        <h3>+</h3>
                                    </div>
                                    <div>
                                        <p>R$599,80</p>
                                    </div>
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

                                <div className='d-flex align-items-center justify-content-between col-11 mt-2'>
                                    <h5>Subtotal</h5>
                                    <h5>R$999,60</h5>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-end'>
                            <div className='d-flex align-items-center justify-content-between col-lg-4 mt-2'  >
                                <h4>Total (3 itens)</h4>
                                <h4>R$999,60</h4>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>

                            <div className='d-flex align-items-center justify-content-between col-lg-4 mt-2' >
                                <button className='checkout-side-button'>Continuar Comprando</button>
                                <button className='checkout-main-button'>Pagamento</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default index