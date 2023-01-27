// @ts-nocheck
import React from "react";
import FirstFrame from "./frames/FirstFrame";
import SecondFrame from "./frames/SecondFrame";

import { useState, useEffect } from "react";
import { Flex, Box, Card, Heading, Text, Button } from "@chakra-ui/react";
import data from "./data";

function App() {
  const [frameCount, setFrameCount] = useState(0);
  const [startTheShow, setStartTheShow] = useState(false);
  console.log(startTheShow);
  const [msgArr, setMsgArr] = useState([
    "Welcome to my React Demo App!",
    "This is a practice work that's ending",
    "a month long gap - ever since previous record",
    "which was 4 days then",
  ]);

  const getTheShow = () => {
    setFrameCount((prevCount) => prevCount + 1);
    setStartTheShow((prevValue) => !prevValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameCount((prevCount) => prevCount + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <Flex
      border="1px solid black"
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    >
      <Flex
        border="5px double black"
        w="60%"
        h="50vh"
        justify="space-around"
        flexDirection="column"
        align="center"
      >
        {startTheShow ? null : <Button onClick={getTheShow}>Start here</Button>}
      </Flex>
    </Flex>
  );
}

export default App;
