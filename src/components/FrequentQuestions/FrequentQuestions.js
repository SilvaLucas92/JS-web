import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import data from "./data";
import OneQuestion from "./OneQuestion/OneQuestion";
import Aos from "aos";
import "aos/dist/aos.css";
import Section from "../Section/Section";

const FrequentQuestions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section id="frequentQuestions" bg="#f7fafc" title="Preguntas Frecuentes">
        {data.map((oneData, i) => {
            return (
            <VStack
                w="100%"
                backgroundColor="#ffffff"
                boxShadow="lg"
                borderRadius={5}
                px={5}
                my="50px"
                mx="auto"
            >
                <OneQuestion key={oneData.id} oneData={oneData} />
            </VStack>
            );
        })}
    </Section>
  );
};

export default FrequentQuestions;
