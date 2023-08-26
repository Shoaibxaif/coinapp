import React from "react";
import "./Loader.css";
import { Center } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center my={'20'} h={'50vh'}>
      <div className="custom-loader"></div>
    </Center>
  );
};

export default Loader;
