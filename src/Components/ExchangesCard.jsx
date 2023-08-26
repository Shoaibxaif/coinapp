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

const ExchangesCard = (props) => {
  return (
    <Card
     my={'1'}
      h={"150px"}
      w={"150px"}
      border={"2px solid black"}
      boxShadow="xl"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <a href={props.url} target="blank">
        <CardBody>
          <Center>
            <Image
              src={props.image}
              borderRadius="lg"
              objectFit={"contain"}
              h={"10"}
              w={"10"}
            />
          </Center>

          <Stack mt="2">
            <Heading size="sm" noOfLines={"1"} m={"auto"}>
              {props.name}
            </Heading>

            <Text color="Black.600" fontSize="xl" m={"auto"} fontWeight="bold">
              {props.rank}
            </Text>
          </Stack>
        </CardBody>
      </a>
    </Card>
  );
};

export default ExchangesCard;
