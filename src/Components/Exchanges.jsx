import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {server} from '../index.js';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ExchangesCard from './ExchangesCard.jsx';

const Exchanges = () => {

    const [exchanges, Setexchanges] = useState([]);
    const [loading, Setloading] = useState(true);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchange`);
                console.log(data)
                Setexchanges(data);
                Setloading(false);
            } catch (error) {
                console.error('Error fetching exchanges:', error);
            }
        };

        fetchExchanges(); 

    }, []);

    return (
        <Container maxW={"container.xl"} p={16}>

        {loading? <Loader/> : (<>

        <HStack  wrap={"wrap"} justifyContent={"space-evenly"} >

        {
            exchanges.map((i)=>{
                return <>
                <ExchangesCard key={i.id} image = {i.image} name = {i.name} url = {i.url} rank = {i.trust_score_rank}/>
                </>
            })
        }

        </HStack>

        </>)}


       

        </Container>
    );
}

export default Exchanges;
