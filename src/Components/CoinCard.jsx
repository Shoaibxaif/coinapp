import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, CurrencySymbol = "₹" }) => {
  return (
    <Card
     my={'1'}
      h={"180px"}
      w={"180px"}
      border={"2px solid black"}
      boxShadow="xl"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Link to={`/coin/${id}`} >
        <CardBody>
          <Center>
            <Image
              src={img}
              borderRadius="lg"
              objectFit={"contain"}
              h={"10"}
              w={"10"}
            />
          </Center>

          <Stack mt="2">
            <Heading size="md" noOfLines={"1"} m={"auto"}>
               {symbol}
            </Heading>
          

            <Text  m={"auto"}  noOfLines={"1"}>
            {name}
            </Text>
            <Text m={'auto'} noOfLines={1}>{price ? `${CurrencySymbol}${price}` : "NA"}</Text>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CoinCard;
