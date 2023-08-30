import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index.js";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import CoinCard from "./CoinCard.jsx";
import Error from "./Error.jsx";
import './Error.css'

const Coins = () => {
  const [Coins, SetCoins] = useState([]);
  const [loading, Setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, Setpage] = useState(1);
  const [currency, Setcurrency] = useState("inr");

  const CurrencySymbol = currency ==="inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    Setpage(page);
    Setloading(true);
  };

  const btns = new Array(100).fill(1);

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        SetCoins(data);
        Setloading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
        seterror(true);
        Setloading(false);
      }
    };

    fetchcoins();
  }, [currency, page]);

  if(error){
    return <Error/>
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup value={currency} onChange={Setcurrency} p={8} >
          <HStack spacing={'4'} justifyContent={'center'} >
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {Coins.map((i) => {
              return (
                <>
                  <CoinCard
                    id = {i.id}
                    key={i.id}
                    img={i.image}
                    name={i.name}
                    symbol={i.symbol}
                    price = {i.current_price}
                   CurrencySymbol = {CurrencySymbol}
                  />
                </>
              );
            })}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};




export default Coins
