import React from "react";
import { useState, useEffect } from "react";
import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const FramerSwitcher = (props) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevValue) => prevValue + 1);
    }, 5000);
  });

  return (
    <Flex
      border="5px double black"
      w="60%"
      h="50vh"
      justify="space-around"
      flexDirection="column"
      align="center"
    ></Flex>
  );
};
