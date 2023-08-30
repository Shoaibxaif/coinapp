import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index.js";
import {
  Container,
  HStack,
  RadioGroup,
  Radio,
  Image,
  Center,
  VStack,
  Text,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import "./Error.css";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const params = useParams();
  const [Coin, SetCoin] = useState([]);
  const [loading, Setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency, Setcurrency] = useState("inr");

  const CurrencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        SetCoin(data);
        Setloading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
        seterror(true);
        Setloading(false);
      }
    };

    fetchcoins();
  }, [params.id]);

  if (error) {
    return <Error />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={Setcurrency} p={8}>
            <HStack spacing={"4"} justifyContent={"center"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <Container maxW={"xl"}>
            <VStack>
              <Badge fontSize={"3xl"} bgColor={"black"} color={"white"}>Rank : {Coin.market_cap_rank}</Badge>
              <Image src={Coin.image.large} />

              <Stat>
                <VStack>
                  <StatLabel fontSize={"2xl"}>{Coin.name}</StatLabel>
                  <StatNumber>
                    {" "}
                    {CurrencySymbol}
                    {Coin.market_data.current_price[currency]}
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow
                      type={
                        Coin.market_data.price_change_percentage_24h > 0
                          ? "increase"
                          : "decrease"
                      }
                    />
                    {Coin.market_data.price_change_percentage_24h}%
                  </StatHelpText>
                </VStack>
              </Stat>

              <Text size={"small"} opacity={0.6}>
                Last Updated on{" "}
                {Date(Coin.market_data.last_updated).split("G")[0]}{" "}
              </Text>

              <Text noOfLines={10} spacing={1}>
                {Coin.description.en}
              </Text>
            </VStack>
          </Container>
        </>
      )}
    </Container>
  );
};

export default CoinDetail;
