// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Card, Heading, Text, Button } from "@chakra-ui/react";

const SecondFrame = (props) => {
  return <Heading as="h2">I want to play a game.</Heading>;
};

function App() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prevScene) => prevScene + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      border="1px solid black"
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    ></Flex>
  );
}

export default App;
